/**
* 2015 PrestaWach
*
* @author    PrestaWach <info@prestawach.info>
* @copyright 2015 PrestaWach
* @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*/

$(document).ready(function () {
	var breadcrumbmenu_timeout = null;
	
	$('.breadcrumb-menu').mouseenter(function () {
		clearTimeout(breadcrumbmenu_timeout);
		
		var object_id = $(this).attr('id')
		breadcrumbmenu_timeout = setTimeout(function () {
			openBredcrumbmenu(object_id);
		}, 500);
	});
	$('.breadcrumb-menu').mouseleave(function () {
		clearTimeout(breadcrumbmenu_timeout);
		
		breadcrumbmenu_timeout = setTimeout(function () {
			closeBredcrumbmenu();
		}, 500);
	});
	
	$('.breadcrumb-submenu').mouseenter(function () {
		clearTimeout(breadcrumbmenu_timeout);
	});
	$('.breadcrumb-submenu').mouseleave(function () {
		clearTimeout(breadcrumbmenu_timeout);
		
		breadcrumbmenu_timeout = setTimeout(function () {
			closeBredcrumbmenu();
		}, 500);
	});
});

function openBredcrumbmenu(object_id)
{
	closeBredcrumbmenu();
	
	var submenu_id = object_id.replace('menu', 'submenu');
	$('#'+submenu_id).show();
}
function closeBredcrumbmenu()
{
	$('.breadcrumb-submenu').hide();
}