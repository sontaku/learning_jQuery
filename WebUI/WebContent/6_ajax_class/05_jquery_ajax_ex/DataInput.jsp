<%@ page language="java" import="java.sql.*"%>
<%
String driver="oracle.jdbc.driver.OracleDriver";
String user="SCOTT";
String pass="TIGER";
String dbURL="jdbc:oracle:thin:@localhost:1521:xe";

request.setCharacterEncoding("UTF-8");
String name  = request.getParameter("name");
String age = request.getParameter("age");
String tel = request.getParameter("tel");
String addr= request.getParameter("addr");


	Class.forName(driver);
	Connection con=DriverManager.getConnection(dbURL,user,pass);		
	
	String sql = "insert into ajax_temp(name, age, tel, addr) values(";
	sql += "'" + name + "','" + age + "','" + tel + "','" + addr + "')";
	
	Statement stmt = con.createStatement();
	int result = stmt.executeUpdate(sql);

	stmt.close();
	con.close();
	
	out.write(String.valueOf(result));
%>