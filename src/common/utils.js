export default {

  Cookie:{
    // 获取浏览器cookie
    getCookie:function () {
      return  document.cookie;
    },
    // 获取cookie
    getCookieByName:function (param) {
      var arr,reg=new RegExp("(^| )"+param+"=([^;]*)(;|$)");
      if (arr = document.cookie.match(reg))
        return decodeURIComponent(arr[2]);//不推荐使用unescape
      else
        return null;
    },
    delCookie: function (param) {
      var exp = new Date()
      exp.setTime(exp.getTime() - 1)
      var cval = getCookie(param)
      if (cval != null) {
        document.cookie = param + '=' + cval + ';expires=' + exp.toGMTString()
      }
    }
  },
  Requests: {
    getQueryString: function (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) {
        return unescape(r[2]);
      }
      return null;
    }
  },
  Url:{
    homeUrl:"http://127.0.0.1:8081",
    baseUrl:"http://127.0.0.1:8080/blog/api"
  },
  DateUtils:{
    getDate:function (dateStr) {
      var saleDate = new Object();
      saleDate.year = dateStr.substring(0,4);
      saleDate.month = dateStr.substring(5,7);
      saleDate.day = dateStr.substring(8,10);
      return saleDate;
    }
  }

}
