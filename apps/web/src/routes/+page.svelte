<script>
  // import configState from "$lib/state/config.svelte";
</script>

<div id="frontpage-pipes-holder">
  <svg height="2222" viewBox="0 0 514 3000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect id="pipeleft" x="-80" width="20" height="3000" fill="#060320"/>
  <rect id="piperight" x="574" width="20" height="3000" fill="#060320"/>
  <rect id="pipemid" x="250" width="20" height="286" fill="#060320"/>
  </svg>
</div>

<div id="frontpage" class="h-80 flex justify-center items-end home_div press-start-2p">
  <div class="text-8xl font-mono font-extrabold" id="frontpage-logo-div">
    <img id="frontpage-logo" src="https://u.cubeupload.com/oreophone/logo.png" alt="Welcome to BushBashCTF"/>
  </div>

  <div class="text-2xl font-mono frontpage-section" id="frontpage-subtitle-div">
    <div id="frontpage-subtitle-left">
      <p id="frontpage-subtitle">
        The second student-led CTF of the ANU!
      </p>
      <div id="frontpage-startend-div">
        <div class="frontpage-startend" id="frontpage-start">
          <h3>Start</h3>
          <p>31 Jul 5pm</p>
        </div>
        <div class="frontpage-startend" id="frontpage-end">
          <h3>Start</h3>
          <p>31 Jul 5pm</p>
        </div>
      </div>
    </div>
    <div id="frontpage-subtitle-right">
      <h3>Sponsored by</h3>
      <div id="frontpage-subtitle-sponsor-div">
        TODO
      </div>
    </div>
  </div>

  <div class="frontpage-section" id="frontpage-info-div">
    <div id="frontpage-info-left">
      <p>
        Welcome to BushBashCTF 2026, the second CTF of the 
        ANU CSSA!
      </p>
      <ul>
        <li>Teams of up to n players</li>
        <li>Beginner-friendly + intense challenges</li>
        <li>$xxx prize pool!</li>
      </ul>
    </div>
    <div id="frontpage-info-right">
      <img id="frontpage-join" src="https://u.cubeupload.com/oreophone/joinsign.png" alt="Join!">
    </div>
  </div>

  <div class="frontpage-section" id="frontpage-buttons">
    <button class="frontpage-button" id="frontpage-button-teamup">Team Up</button>
    <button class="frontpage-button" id="frontpage-button-challenges">Challenges</button>
    <button class="frontpage-button" id="frontpage-button-rulesinfo">Rules+Info</button>
  </div>

  <div class="frontpage-section" id="frontpage-events-sign-div">
    <img id="frontpage-events" src="https://u.cubeupload.com/oreophone/eventsign.png" alt="Events">
  </div>

  <div class="frontpage-section" id="frontpage-events-div">
    <div id="frontpage-events-left">
      <p>
        From ANU? We're hosting a ton of Comp-Sci events for Bush Week!
      </p>
      <ul>
        <li>Cyber Talks</li>
        <li>Social Activities</li>
        <li>Networking Events</li>
        <li>...and more!</li>
      </ul>
    </div>
    <div id="frontpage-events-right">
      <button class="frontpage-button">
        <!-- im sorry -->
        <div id="frontpage-button-cssa-holder">
          <svg id="frontpage-button-cssa" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150">
            <path style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="M 68,0.050781 C 30.378605,1.119279 0,32.129172 0,70 0,87.14886 6.239946,102.8849 16.548828,115.08203 22.893915,112.7262 28.747204,109.05574 33.607422,104.35742 25.16676,95.41552 20,83.34555 20,70 20,42.938098 41.20567,21.092325 68,20.050781 Z M 70,121.64062 C 63.557078,127.81744 56.001408,132.83911 47.804688,136.35938 54.786969,138.70761 62.245802,140 70,140 Z" id="path881"/>
            <path style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="m 120,0 c -7.71151,0 -15.13093,1.278034 -22.08008,3.601562 2.43679,1.049675 4.81465,2.234872 7.1211,3.548829 4.73014,-2.678768 9.75253,-4.829594 14.95898,-6.375 z M 70.115234,21.914062 c -0.299003,0.0017 -0.599083,0.01939 -0.898437,0.02734 C 57.32532,34.498445 50,51.419545 50,70 50,97.73268 27.732684,120 0,120 v 20 c 6.220095,0 12.251329,-0.83093 18,-2.36719 V 118.02344 C 36.725166,118.93601 55.353521,107.92061 63.275391,90.88672 69.460329,79.743354 66.918347,66.730685 69.632812,54.777344 71.905048,43.42929 77.212403,32.978226 84.56055,24.210938 79.917019,22.695794 75.042945,21.885316 70.115234,21.914062 Z" id="path879"/>
            <path style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="m 140,0 c -11.92108,0 -23.16133,3.016506 -33.00586,8.314453 6.33773,3.876533 12.09887,8.711934 17.02539,14.283203 C 129.03386,20.921326 134.40213,20 140,20 Z M 86.55273,24.912109 C 78.701165,34.199963 73.224942,45.543088 71.054688,58 H 91.44336 c 2.0789,-8.520871 6.3253,-16.161747 12.12891,-22.322266 C 98.71107,30.986683 92.88054,27.288315 86.55273,24.912109 Z M 68.556641,82 C 63.217595,103.88336 43.590844,120 20,120 v 20 c 34.449727,0 63.22043,-25.1401 68.94531,-58 z" id="path877"/>
            <path style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;writing-mode:lr-tb;direction:ltr;text-orientation:mixed;dominant-baseline:auto;baseline-shift:baseline;text-anchor:start;white-space:normal;shape-padding:0;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="m 70,0 v 20 c 24.30516,0 44.40891,17.103737 49.00781,40 -16.0931,0 -32.1862,0 -48.279294,0 C 70.256908,63.268679 70,66.60472 70,70 70,73.427516 69.65635,76.771168 69.007812,80 86.00521,80 103.0026,80 120,80 v 60 h 20 V 70 C 140,31.458514 108.54149,0 70,0 Z" id="path875"/>
          </svg>
        </div>
        <p>Tech Fest</p>
        <div id="frontpage-button-redirect-holder">
        <svg id="frontpage-button-redirect" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0-201.4 201.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3 448 192c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 96C35.8 96 0 131.8 0 176L0 432c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l80 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 96z"/></svg>
        </div>
      </button>
    </div>
  </div>

  <div id="frontpage-sponsor-border">
    <svg width="3000" height="402" viewBox="0 0 3000 402" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_166_3" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="3000" height="402">
    <rect width="3000" height="401.25" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_166_3)">
    <ellipse cx="1473.75" cy="762.187" rx="2724.38" ry="720.937" fill="#060320"/>
    </g>
    </svg>
  </div>

  <div id="frontpage-bottom-holder">
    <div class="frontpage-section" id="frontpage-sponsors-div">
      <div class="frontpage-startend" id="frontpage-sponsors-title">
        <p>CSSA Sponsors</p>
      </div>
      <!-- TODO link all sponsors -->
      <div class="frontpage-sponsors-row">
        <a href="https://janestreet.com" title="Jane Street - Partner">
          <img class="sponsor-logo" id="sponsor-janestreet" src="https://u.cubeupload.com/oreophone/bbjanestreet.png" alt="Jane Street - Partner"/>
        </a>
        <a href="https://imc.com" title="Jane Street - Major Sponsor">
          <img class="sponsor-logo" id="sponsor-imc" src="https://u.cubeupload.com/oreophone/bbimc.png" alt="IMC - Major Sponsor"/>
        </a>
      </div>
      <div class="frontpage-sponsors-row">
        <a href="https://citadel.com" title="Citadel - Digital Sponsor">
          <img class="sponsor-logo" src="https://u.cubeupload.com/oreophone/bbcitadel.png" alt="Citadel - Digital Sponsor"/>
        </a>
        <a href="https://atlassian.com" title="Atlassian - Digital Sponsor">
          <img class="sponsor-logo" src="https://u.cubeupload.com/oreophone/bbatlassian.png" alt="Atlassian - Digital Sponsor"/>
        </a>
        <a href="https://optiver.com" title="Optiver - Networking Sponsor">
          <img class="sponsor-logo" src="https://u.cubeupload.com/oreophone/bboptiver.png" alt="Optiver - Networking Sponsor"/>
        </a>
      </div>
      <div class="frontpage-sponsors-row">
        <a href="https://infosectcbr.com.au" title="Infosect - Networking Sponsor">
          <img class="sponsor-logo" src="https://u.cubeupload.com/oreophone/bbinfosect.png" alt="Citadel - Networking Sponsor"/>
        </a>
        <a href="https://bsidesau.com.au" title="BSides - Digital Sponsor">
          <img class="sponsor-logo" src="https://u.cubeupload.com/oreophone/263bbbsides.png" alt="BSides - Digital Sponsor"/>
        </a>
        <a href="https://tantosec.com" title="TantoSec - Digital Sponsor">
          <img class="sponsor-logo" src="https://u.cubeupload.com/oreophone/bbtantosec.png" alt="TantoSec - Digital Sponsor"/>
        </a>
        <a href="https://nttdata.com" title="NTT Data - Networking Sponsor">
          <img class="sponsor-logo" src="https://u.cubeupload.com/oreophone/bbnttdata.png" alt="NTT Data - Networking Sponsor"/>
        </a>
      </div>
    </div>

    <div class="frontpage-section" id="frontpage-bottom-div">
      <a href="https://cssa.club" title="made by the ANU CSSA">
        <img id="frontpage-cssafull" src="https://u.cubeupload.com/oreophone/bbcssafull.png" alt="ANU Computer Science Students' Association"/>
      </a>
      <a href="#top" title="Website by oreophone :3">back to top ^</a>
    </div>
  </div>

</div>
