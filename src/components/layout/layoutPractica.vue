<template>
	<div >
		<header class="main-header" >
			
		    <!-- Logo -->
		    <a href="javascript:" @click="InicioDefault()" class="logo">
		      <!-- mini logo for sidebar mini 50x50 pixels -->
		      <span class="logo-mini"><b>D</b>S</span>
		      <!-- logo for regular state and mobile devices -->
		      <span class="logo-lg"  ><b>Docente</b>SIS</span>
		    </a>
	    	<!-- Header Navbar: style puede encontrarse en header.less -->
		    <nav class="navbar navbar-static-top">
			    <!-- Bonton Siderbar principal-->
			    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
			        <span class="sr-only">Toggle navigation</span>
			    </a>
				<div class="navbar-custom-menu">
		           <ul class="nav navbar-nav">
		           		<!-- Cuenta de usuario estilos de dropdown.less -->
		            	<li class="dropdown user user-menu">
			            	<a href="#" class="dropdown-toggle" data-toggle="dropdown">
			              		<img src="src/assets/img/user2-160x160.jpg" class="user-image" alt="User Image">
			              		<span class="hidden-xs">Alexander Pierce</span>
			            	</a>
			            	<ul class="dropdown-menu">
			              		<!-- imagen usuario -->
			              		<li class="user-header">
				                	<img src="src/assets/img/user2-160x160.jpg" class="img-circle" alt="User Image">
									<p>
			                  			Alexander Pierce - Web Developer
			                  			<small>Member since Nov. 2012</small>
			                		</p>
		              			</li>
					             <!-- menu footer -->
					            <li class="user-footer">
					                <div class="pull-left">
					                  <a href="#" class="btn btn-default btn-flat">Profile</a>
					                </div>
					                <div class="pull-right">
					                  <a href="#" class="btn btn-default btn-flat">Sign out</a>
					                </div>
		              			</li>
		            		</ul>
	          			</li>
	          			<!-- Control del sidebar -->
	          			<li>
	            			<a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
	          			</li>
	        		</ul>
	      		</div>
	    	</nav>
    	</header>
	    <!-- Columna lateral izquierda. contiene el logo y la barra lateral -->
	    <aside class="main-sidebar">
    		<!-- Sidebar principal estilios en sidebar.less -->
    		<section class="sidebar">
	        	<!-- Sidebar panel usuario -->
        		<div class="user-panel">
        			<div class="pull-left image">
          				<img src="src/assets/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        			</div>
        			<div class="pull-left info">
          				<p>Alexander Pierce</p>
            			<a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        			</div>
      			</div>
        		<!-- final Siderbar panel usuario -->
        		<!-- Siderbar menu principal estilos en sidebar.less -->
      			<ul class="sidebar-menu" data-widget="tree">
        			<li class="header">MENÚ DE NAVEGACIÓN</li>
        			<li>
        				<router-link :to="'/'">
        					<i class="fa fa-circle-o text-aqua"></i><span>Mis Materias</span>
        				</router-link>	
        			</li>
        				
      			</ul>
    		</section>
    	<!-- /.final Sidebar -->
  		</aside>
		<!-- Paginas de contenidos -->
  		<div class="content-wrapper">
    			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
		            <router-view :key="$route.fullPath"/>
		        </div>
		    
  		</div>
  		<!-- /.Seccion del footer -->
    	<footer class="main-footer">
    		<strong>Copyright &copy; 2020 <a href="#">Ingenieria de Sistemas</a>.</strong> Todo los derechos reservados
  		</footer>
	    <!--final del footer-->

	    <!-- control Sidebar -->
	    <aside class="control-sidebar control-sidebar-dark" style="display: none;">
	    
	    </aside>
		  <!--final control Sidebar-->
		  <!-- -Añade un fondo oscuro al Sidebar -->
		<div class="control-sidebar-bg"></div>
		<!--final Añade un fondo oscuro al Siderbar-->
	</div>
</template>
<script>
	export default{
		name:'layoutPractica',
		methods:{
			InicioDefault(){
				this.$router.push("/")
				.catch(()=>{})
			}
		}
	}
</script>
<style>
	
</style>