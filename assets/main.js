const typed = new Typed('.typed', {
    strings: [
        '<l class="uno">namespace</l><l class="dos"> Nav\Http\Livewire</l>; <br><br>' +
        '<l class="uno">use</l><l class="dos"> Livewire\Component</l>;<br><br>' +
        '<l class="uno">Class</l><l class="dos"> ShowUser</l><l class="uno"> extends </l><l class="dos">Component</l><br>' +
        '{<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;<l class="uno">public function</l><l class="tres"> render()</l><br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;{<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<l class="uno">return</l> <l class="tres">view</l>(<l class="cuatro">"Expresa tus ideas o expande tu negocio a través de un sitio web"</l>);<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;}<br>' +
        '}'
    ],
    typeSpeed: 30,
    StartDelay: 1000,
    smartBackspace: true,
    shuffle: false,
    backDelay: 2000,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
});
const typed2 = new Typed('.typed2', {
    strings: [
        '<l class="uno">let</l><l class="dos"> nombre</l> ;<br><br>' +
        '<l class="dos">nombre</l> = <l class="tres"> prompt </l>( <l class="cuatro">"¿Cual es tu nombre?"</l> ) ;<br><br>' +
        '<l class="uno">if </l>( <l class="dos">nombre</l> . <l class="tres">toUpperCase</l> ( ) == <l class="cuatro">"CODEFEL"</l> ) <br>{<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<l class="tres">alert</l> (<l class="cuatro"> "Bienvenido CodeFel" </l>) ;<br>' +
        '}<br>' +
        '<l class="uno">else</l><br>' +
        '{<br>' +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<l class="tres">alert </l>( <l class="cuatro">"Bienvenido "</l> + nombre + <l class="cuatro">", nos encantaria conocer tu opinión, porfa <br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contactate con nosotros."</l> );<br>' +
        '}<br>' +
        '}'
    ],
    typeSpeed: 30,
    StartDelay: 1000,
    smartBackspace: true,
    shuffle: false,
    backDelay: 2000,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
});