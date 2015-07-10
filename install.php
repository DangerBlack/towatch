<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
	<title>Jarvis</title>
	<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<!--
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0">
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.8.1.min.js"></script>
-->
	
	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
	<script src="http://code.jquery.com/ui/1.9.1/jquery-ui.js"></script>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap-theme.min.css">
	<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js"></script>
	<style>
			.install_title{
				text-align:center;
			}
			#install{
				max-width: 330px;
				padding: 15px;
				margin: 0 auto;
			}
			#completed{
				display:none;
				text-align:center;
				max-width: 330px;
				margin: 0 auto;
			}
	</style>
	<?php
		include("../php/query.php");
		$install=$_GET['install'];
		if($install==true){
			$name="Da Vedere";
			$developer="DangerBlack";
			$folder="towatch";
			$res=insertPlugin($name,$developer,$folder);
			echo "<style>#install{display:none;}#completed{display:block;}</style>";
		}
	?>
	
	
</head>

<body>
	
	<div id="container" >
		<div class="row">
		</div>
		<h1 class="install_title">Installer of towatch</h1>
		<form id="install" class="form-signin" action="install.php?install=true" method="post">
			
			<label>Autore: Daniele Baschieri</label><br />
			<label>Cartella: towatch</label><br />
			<label>Nome: davedere</label><br />
			<button class="btn btn-lg btn-primary btn-block" type="submit" value="install">Install</button>
		 </form>
		 <div id="completed"class="alert alert-success" role="alert"><p>Installazione completata con successo!</p></div>
	</div>
</body>

</html>
