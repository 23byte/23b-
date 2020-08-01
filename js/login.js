function checkUser(str){
    //var user = /^[a-zA-Z]\w{5,15}/;
    //因处于开发阶段,只判断特定字符
    var user = /^admin$/;
    return user.test(str);
}
function checkPwd(str){
  //  var pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,}$/;
    //最少6位,包含至少1个大写字母,1个数字,1个特殊字符
    //因处于开发阶段,值判断特定字符
    var pwd = /^123456$/;
    return pwd.test(str);
}

function checkExecute(node,str,str1,func){
    var Val = Trim(node.val());
    if (Val==''||Val==undefined||Val==null){
        var _this = node.next();
        _this.append('<i class=" fa fa-exclamation-triangle"></i>'+str);
    }else{
        var flag = func( Val );
        if( !(flag) ){
            var _this = node.next();
            _this.append('<i class=" fa fa-exclamation-triangle"></i> '+str1);
        }
    }
}
function submitCheck(){
    var userVal = Trim($('#username').val()); 
    var pwdVal = Trim($('#password').val());   
    if (userVal==''||userVal==undefined||userVal==null || pwdVal==''||pwdVal==undefined||pwdVal==null)  {
        console.log('账号或密码为空');
        return false
    } 
    if (checkUser(userVal)==false || checkPwd(pwdVal)==false){
        console.log('账号或密码错误');
        return false
    }

    $('#loginForm').submit();
    
}

$(document).ready(function(){
    
    $('#login').click(submitCheck);

    //验证 账号密码
    var username = $('#username'); 
    var password = $('#password');
    username.focus(function(){
        $(this).next().empty();
    });
    username.blur(function(){
        checkExecute($(this),'账号不可为空','账号格式错误',checkUser);
    });
    password.focus(function(){
        $(this).next().empty();
    });
    password.blur(function(){
        checkExecute($(this),'密码不可为空','密码格式错误',checkPwd);
    });

    //判断sign 上一级是什么元素 来调整 上边距
    var sign = $('.sign');
    if(sign.prev()[0].tagName != 'P'){
        sign.css("margin-top","40px")
        console.log('xx');
    }

})