module.exports = {
    name: 'login',
    data() {
        return {
            winSize: {
                width: '',
                height: ''
            },

            formOffset: {
                position: 'absolute',
                left: '',
                top: ''
            },

            remumber: this.$store.state.user.remumber,

            register: false,

            login_actions: {
                disabled: false
            },

            data: {
                username: '',
                password: '',
                // token: ''
            },

            rule_data: {
                username: [{
                    validator: (rule, value, callback) => {
                        if (value === '') {
                            callback(new Error('请输入用户名'));
                        } else {
                            if (/^[a-zA-Z0-9_-]{1,16}$/.test(value)) {
                                callback();
                            } else {
                                callback(new Error('用户名至少6位,由大小写字母和数字,-,_组成'));
                            }
                        }
                    },
                    trigger: 'blur'
                }],
                password: [{
                    validator: (rule, value, callback) => {
                        if (value === '') {
                            callback(new Error('请输入密码'));
                        } else {
                            if (!(/^[a-zA-Z0-9_-]{6,16}$/.test(value))) {
                                callback(new Error('密码至少6位,由大小写字母和数字,-,_组成'));
                            } else {
                                if (this.register === true) {
                                    if (this.data.repassword !== '') {
                                        this.$refs.data.validateField('repassword');
                                    }
                                }
                                callback();
                            }

                        }
                    },
                    trigger: 'blur'
                }],
                repassword: [{
                    validator: (rule, value, callback) => {
                        if (value === '') {
                            callback(new Error('请再次输入密码'));
                        } else if (value !== this.data.password) {
                            callback(new Error('两次输入密码不一致!'));
                        } else {
                            callback();
                        }
                    },
                    trigger: 'blur'
                }]
            }
        }
    },
    methods: {
        setSize() {
            this.winSize.width = $(window).width() + "px";
            this.winSize.height = $(window).height() + "px";

            this.formOffset.left = (parseInt(this.winSize.width) / 2 - 175) + 'px';
            this.formOffset.top = (parseInt(this.winSize.height) / 2 - 178) + 'px';
        },

        onLogin(ref, type) {
            if (type && this.register === true) {
                this.$message.error('请输入确认密码');
                return;
            }

            debugger;
            this.$refs[ref].validate((valid) => {
                if (valid) {
                    this.login_actions.disabled = true;
                    //如果记住密码，提交的信息包括真实token，密码则是假的
                    //服务端登录验证优先级：用户名必须，其次先取token，不存在时再取密码
                    this.$$api_user_login(this[ref], data => {
                    // var data = {
                    //     userinfo: {
                    //         access_status: 2,
                    //         address: "",
                    //         api_routers: "",
                    //         birthday: "1992-11-05",
                    //         create_time: "2017-05-08 08:16:11",
                    //         default_web_routers: "",
                    //         email: "",
                    //         id: 753,
                    //         is_update_pass: 1,
                    //         pid: 78,
                    //         sex: "3",
                    //         status: 1,
                    //         token: "8b04498138834fa8e4e961c71591b565",
                    //         username: "sls-1",
                    //         web_routers: ""
                    //     }
                    // }
                    //登录成功之后，验证是否记住密码，如果记住密码，本地保存记住信息
                    //如果没有记住，就初始化本地记住信息
                    if (this.remumber.remumber_flag === true) {
                        this.$store.dispatch('update_remumber', {
                            remumber_flag: this.remumber.remumber_flag,
                            remumber_login_info: {
                                username: this[ref].username,
                                token: data.userinfo.token
                            }
                        });
                    } else {
                        this.$store.dispatch('remove_remumber');
                    }
                    try {
                        data.userinfo.web_routers = JSON.parse(data.userinfo.web_routers) ? JSON.parse(data.userinfo.web_routers) : {};
                    } catch (e) {
                        data.userinfo.web_routers = {};
                    }
                    try {
                        data.userinfo.api_routers = JSON.parse(data.userinfo.api_routers) ? JSON.parse(data.userinfo.api_routers) : {};
                    } catch (e) {
                        data.userinfo.api_routers = {};
                    }
                    this.$store.dispatch('update_userinfo', {
                        userinfo: data.userinfo
                    }).then(() => {
                        this.login_actions.disabled = false;
                        if (data.userinfo.default_web_routers) {
                            this.$router.push(data.userinfo.default_web_routers);
                        } else {
                            this.$router.push('/demo/user/list');
                        }
                    });
                    },
                    {
                        errFn: () => {
                            this.login_actions.disabled = false;
                        },
                        tokenFlag: true
                    });
                }
            });
        },

        onRegister(ref) {
            this.$refs[ref].validate((valid) => {
                if (valid) {
                    this.login_actions.disabled = true;
                    this.$$api_user_register(this[ref], data => {
                        this.login_actions.disabled = false;
                        this.$message.success('注册成功，请登录。');
                        this.toggleStatus(false);
                    }, {
                            errFn: () => {
                                this.login_actions.disabled = false;
                            },
                            tokenFlag: true
                        });
                }
            });
        },

        resetForm(ref) {
            this.$refs[ref].resetFields();
        },

        toggleStatus(type) {
            this.register = type;
            if (this.register === true) {
                this.$set(this.data, 'repassword', '');
            } else {
                this.$delete(this.data, 'repassword');
            }
        }
    },
    created() {
        this.setSize();
        $(window).resize(() => {
            this.setSize();
        });
    },
    mounted() {
        // this.toggleStatus(true);
        // console.log(this.remumber);

        //如果上次登录选择的是记住密码并登录成功，则会保存状态，用户名以及token
        if (this.remumber.remumber_flag === true) {
            this.data.username = this.remumber.remumber_login_info.username;
            this.data.password = this.remumber.remumber_login_info.token.substring(0, 16);
            this.$set(this.data, 'token', this.remumber.remumber_login_info.token);
        }
    }
}
