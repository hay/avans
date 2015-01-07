# Aanlevereisen liefdeskaartproject
### *Door Hay Kranen*

## Vormgeving

* Er dient een **huisstijl** aanwezig te zijn. In de meest simpele vorm bestaat dat uit:
  * Kleuren in hexidecimaal formaat en in RGB(a) waardes.
  *	Logo’s, iconen en dergelijke in een vectorformat zoals AI, PDF of SVG.
  *	Lettertypes en specificering van de corpus voor koppen, paragrafen, etcetera.
  *	Het gebruikte lettertype moet *of* [standaard beschikbaar zijn](http://www.cssfontstack.com/) *of* te gebruiken zijn als webfont. Let op: niet elk willekeurig font is als webfont beschikbaar. Een goede bron van gratis vrije fonts is [Google Fonts](https://www.google.com/fonts).
* Alle andere schetsen dienen aangeleverd te worden als Illustrator of Photoshop bestand.
* Let op auteursrecht bij materiaal wat je niet zelf hebt gemaakt! Willekeurige foto's geplukt van het internet mag je niet zomaar gebruiken. Zorg ervoor:
	* Dat je materiaal zelf hebt gemaakt.
	* Dat materiaal vrij herbruikbaar is: zoek op [Flickr met Creative Commons Attribution/BY of AttributionSharealike/BYSA als optie](https://www.flickr.com/search/?q=aap&l=commderiv&ct=0&mt=all&adv=1) of gebruik foto's van [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page). Zorg in dat geval ook voor juiste bronvermelding.
	* Dat het materiaal te koop is bij stockfotobureaus als iStockPhoto.com. Overleg eerst in het geval van de laatste optie.

## Inhoud
* Tekst dient gecontroleerd te zijn op spelfouten en correcte grammatica.
* Alle links dienen ergens naartoe te leiden.
* Site moet getest zijn op onduidelijkheden en consistentie.

## Techniek
* Er **moet** een domeinnaam beschikbaar zijn of al geregistreerd zijn. Als er al een domeinnaam geregistreerd is **moeten** de gegevens daarvan worden overgedragen zodat de hosting goed kan verlopen.
* Alle code **moet** beschikbaar zijn in een Github repository.
* Bij de code **moet** een README.md bestand zitten met installatieinstructies inclusief eventuele configuratiemogelijkheden en andere dingen die noodzakelijk zijn om de code te draaien.
* Alle code dient in een duidelijke mappenstructuur te zijn aangebracht.
* Gebruik geen spaties in bestandsnamen (gebruik streepjes of underscores). Vermijd zoveel mogelijk hoofdletters in bestandsnamen.
* Code dient zichzelf uit te leggen. Commentaar is fijn, maar alleen als het uitlegt *waarom* de code iets doet, niet *wat* de code doet.

Ter voorbeeld. Dit heeft geen zin:

	$counter = $counter + 1; // Adding '1' to the counter
	
Dit heeft wel zin:
	
	loadConfigData(); // This will fail if config.php is not available
	
* De code en het commentaar dient zoveel mogelijk in het Engels geschreven te zijn.

### Backend

* Bij gebruik van een database is er een sterke voorkeur voor MySQL, MariaDB of PostgresSQL. Overleg voor andere databases.
* Bij gebruik van een SQL database **moet** er ook een dump van de database worden meegeleverd (hoeft niet via Github).
* Zorg voor een configuratiefile waarin opties kunnen worden ingesteld als wachtwoorden en usernames voor databases. **Check geen configuratiebestanden in met wachtwoorden op Github**! Zorg in plaats daarvan voor een `config-sample.php` of iets dergelijks waarin je voorbeeldwaardes geeft.
* Als programmeertaal is er een sterke voorkeur voor PHP, waar mogelijk in combinatie met een (open source) framework als Laravel, CodeIgniter, Slim of Symfony2. Overleg over andere programmeertalen.
* Bij gebruik van PHP is het sterk aanbevolen om gebruik te maken van de [PSR-1](http://www.php-fig.org/psr/psr-1/) en [PSR-2](http://www.php-fig.org/psr/psr-2/) codestandaarden.

### Frontend
* HTML, CSS en Javascript dient zoveel mogelijk in losse bestanden te zijn ondergebracht in een duidelijke mappenstructuur.
* CSS moet zoveel mogelijk op 'componentniveau' worden gescheiden. Probeer selecties te maken met classes in plaats van ids. Gebruik extra classes om varianten te maken. Kijk naar hoe Bootstrap dat doet ter inspiratie.

Bijvoorbeeld:

In HTML:

	<div class="infobox infobox-error">Er is een probleem</div>
	
In CSS:

	.infobox {
		padding: 20px;
		background: white;
		border: 1px solid black;
	}
	
	.infobox-error {
		background: red;
	}		

* Scheid 'external dependencies' (libraries en frameworks zoals D3, jQuery, Bootstrap, etc.) van eigen code. Je mag gebruik maken van een package managment systeem zoals [Bower](http://bower.io).

Bijvoorbeeld:
	
	index.php
	/css
		- base.css
		- fonts.css
		- map.css
		- text.css
	/js
		- app.js
		- map.js
	/vendor
		/bootstrap
			bootstrap.js
			bootstrap.css
		/d3
			d3.js
		/jquery
			jquery.js
		
* Gebruik van preprocessors als LESS of SASS is toegestaan en wordt van harte aanbevolen.
* Gebruik van frameworks als Bootstrap of Foundation is toegestaan en wordt van harte aanbevolen.
* Er dient een favicon aanwezig te zijn.
* De site dient correct te schalen op lagere resoluties (responsive).
* De site dient goed te werken op de volgende browsers:
	* Internet Explorer 11
	* Chrome Desktop (laatste versie)
	* Firefox (laatste versie)
	* iOS Safari (laatste versie)
	* Chrome Android (laatste versie)
	* Android Stock Browser (4.0)