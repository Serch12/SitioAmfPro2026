<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="{{ asset('recursos/logo_verde.png') }}" type="image/png">
    <title>Manual AMFPro</title>

</head>
<body>
  <style type="text/css">
    body {
      background-color: #333;
      margin: 0;
      padding: 0;
    }
    .container {
      height: 95vh;
      width: 95%;
      margin: 0px auto;
      /* border: 2px solid red;
      box-shadow: 0 0 5px red; */
    }
    .fullscreen {
      background-color: #333;
    }
  </style>
  <div class="container" id="container">

  </div>

    {{-- <div id="app">
        <folleto-component></folleto-component>
    </div> --}}
</body>
<script src="{{ asset('js/app.js') }}" defer></script>
<!-- Agrega los scripts de Bootstrap al final del cuerpo del documento -->

<script src="{{ asset('estilos_book/js/libs/jquery.min.js') }}"></script>
<script src="{{ asset('estilos_book/js/libs/html2canvas.min.js') }}"></script>
<script src="{{ asset('estilos_book/js/libs/three.min.js') }}"></script>
<script src="{{ asset('estilos_book/js/libs/pdf.min.js') }}"></script>
<script src="{{ asset('estilos_book/js/dist/3dflipbook.min.js') }}"></script>

<script type="text/javascript">
    const baseUrl = "{{ asset('estilos_book/books/image/theKingIsBlack') }}";
    // console.log('esto es n:'+ n);
    function theKingIsBlackPageCallback(n) {
      return {
        type: 'image',
        src: `${baseUrl}/${n+1}.jpg`,
        interactive: false
      };
    }

    $('#container').FlipBook({
        pageCallback: theKingIsBlackPageCallback,
        pages: 26,
        singlePage:true,
        propertiesCallback: function(props) {
        props.cssLayersLoader = function(n, clb) {// n - page number
          clb([{
            js: function (jContainer) {
              console.log(jContainer);
              return {
                hide: function() {console.log('hide');},
                hidden: function() {console.log('hidden');},
                show: function() {console.log('show');},
                shown: function() {console.log('shown');},
                dispose: function() {console.log('dispose');}
              };
            }
          }]);
        };
        props.cover.color = 0x000000;
        return props;
      },
        template: {
          html: '{{ asset("estilos_book/templates/default-book-view.html")}}',
          styles: [
            '{{ asset("estilos_book/css/short-white-book-view.css")}}'
          ],
          links: [
            {
              rel: 'stylesheet',
              href: '{{ asset("estilos_book/css/font-awesome.min.css")}}'
            }
          ],
          script: '{{ asset("estilos_book/js/default-book-view.js")}}',
        
          sounds: {
            startFlip: '{{ asset("estilos_book/sounds/start-flip.mp3")}}',
            endFlip: '{{ asset("estilos_book/sounds/end-flip.mp3")}}'
          }
        }
      });

  </script>

</html>