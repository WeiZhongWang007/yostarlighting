<%@ page language="java" pageEncoding="UTF-8"%>
{success:<%=request.getAttribute("errorMsg") == null%>,message:"<%=request.getAttribute("errorMsg")==null?"":request.getAttribute("errorMsg")%>",jsonData:<%=request.getAttribute("jsonString")%>,exceptionMsg:"<%=request.getAttribute("errorDetail")==null?"":((String)request.getAttribute("errorDetail")).replaceAll("\r\n", "<br/>")%>"}