export default () => (
  <header className="header-user-dropdown">

	<div className="header-limiter">
		<h1><a href="/">W's <span>blog</span></a></h1>

		<nav>
			<a href="https://www.wjynt.me/">My site</a>
		</nav>


		<div className="header-user-menu">
			<a href="https://www.linkedin.com/in/wijayantoap/"><img src="https://media.licdn.com/dms/image/C5103AQFJUTcYnKpeJg/profile-displayphoto-shrink_200_200/0?e=1567036800&amp;v=beta&amp;t=yFCcTDJFeZ9429R7ivyDKgpI3cLOwqouVFXlWIi8wwo" alt="User Image"/></a>
		</div>

	</div>
  <style jsx>{`
  .header-user-dropdown {
    background-color:#292c2f;
    box-shadow:0 1px 1px #ccc;
    padding: 20px 40px;
    height: 80px;
    color: #ffffff;
    box-sizing: border-box;
  }
  
  .header-user-dropdown .header-limiter {
    max-width: 1200px;
    text-align: center;
    margin: 0 auto;
  }
  
  /* Logo */
  
  .header-user-dropdown .header-limiter h1{
    float: left;
    font: normal 28px Cookie, Arial, Helvetica, sans-serif;
    line-height: 40px;
    margin:0;
  }
  
  .header-user-dropdown .header-limiter h1 span {
    color: #FFD700;
  }
  
  /* The header links */
  
  .header-user-dropdown .header-limiter a {
    color: #ffffff;
    text-decoration: none;
  }
  
  .header-user-dropdown .header-limiter nav{
    font:16px Arial, Helvetica, sans-serif;
    line-height: 40px;
    float: left;
    margin: 0 0 0 60px;
    padding: 0;
  }
  
  .header-user-dropdown .header-limiter nav a{
    font-size: 14px;
    display: inline-block;
    padding: 0 12px;
    opacity: 0.9;
    position: relative;
    text-decoration:none;
    line-height: 1;
  }
  
  .header-user-dropdown .header-limiter nav a:hover {
    opacity: 1;
  }
  
  /* The "new" badge */
  
  .header-user-dropdown .header-limiter nav a span {
    position: absolute;
    top: -12px;
    border-radius: 2px;
    background-color: #2A6A92;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    height: 13px;
    font-size: 11px;
    right: -15px;
    padding: 1px 4px 0;
  }
  
  /* The user menu */
  
  .header-user-dropdown .header-limiter .header-user-menu{
    position: relative;
    float:right;
    background-color:#3a3c3e;
    width:50px;
    height:40px;
    border-radius:2px;
  }
  
  .header-user-dropdown .header-limiter .header-user-menu:before{
    content:'';
    width:0;
    height:0;
    top: 18px;
    left: 15px;
    position:absolute;
    border:5px solid transparent;
    border-top-color:#fff;
  }
  
  .header-user-dropdown .header-limiter .header-user-menu ul{
    display: none;
    font:bold 13px Arial, Helvetica, sans-serif;
    background-color: inherit;
    list-style: none;
    position: absolute;
    text-align: center;
    width: 125px;
    top: 25px;
    right: 0;
    padding: 10px;
    border-radius: 2px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
  
  .header-user-dropdown .header-user-menu:active ul,
  .header-user-dropdown .header-user-menu:hover ul,
  .header-user-dropdown .header-user-menu.show ul{
    display:block;
  }
  
  .header-user-dropdown .header-user-menu ul li{
    padding:5px;
  }
  
  .header-user-dropdown .header-user-menu ul li a:hover{
    opacity:0.9;
  }
  
  .header-user-dropdown .header-user-menu ul li a.highlight{
    color:#e9ac09;
  }
  
  .header-user-dropdown .header-user-menu img{
    border-radius:50%;
    position:absolute;
    top:6px;
    max-width: 28px;
    right:10px;
  }
  
  
  @media all and (max-width: 800px) {
  
    .header-user-dropdown .header-limiter h1 {
      font-size: 24px;
    }
  
    .header-user-dropdown .header-limiter nav a {
      padding: 0 5px;
    }
  
    .header-user-dropdown .header-limiter nav {
      margin-left: 20px;
    }
  
  }
  
  @media all and (max-width: 600px) {
  
    .header-user-dropdown .header-limiter nav {
      display: none;
    }
  
  }
  `}</style>

</header>
)
