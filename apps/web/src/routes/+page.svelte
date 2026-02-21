<script>
  import configState from "$lib/state/config.svelte";
</script>

<div class="h-80 flex justify-center items-end home_div">
  <div class="text-8xl font-mono font-extrabold">
    <img src="https://disorientation.cssa.club/files/logo-web-v2.gif" alt="Welcome to DisorientationCTF">
  </div>
  <div class="home_info_div">
    <div class="home_info_div_left text-l press-start-2p">
      The premier student-led CTF of ANU!
      <br><br>
      Feb 18, 2pm<br>
      |<br>
      Feb 22, 2pm
    </div>
    <div class="home_button_div">
      <a href="/challenges" class="btn btn-primary text-2xl press-start-2p home_button_challenges">Challenges</a>
      <a href="/team" class="btn btn-accent text-2xl press-start-2p home_button_teamup">Team Up</a>
      <a href="/info" class="btn btn-neutral text-2xl press-start-2p">Info+Rules</a>
    </div>
  </div>
  <div class="sponsors_div press-start-2p">
    <span>Sponsored by</span>
    <a href="https://tantosec.com/" target="_blank" rel="noopener noreferrer" title="TantoSec - Event Sponsor">
      <img src="https://disorientation.cssa.club/files/tantosec.png" alt="TantoSec - sharper cyber security"/>
    </a>
    <a href="https://www.bsidesau.com.au/" target="_blank" rel="noopener noreferrer" title="BSides - Event Sponsor">
      <img src="https://disorientation.cssa.club/files/bsides.png" alt="BSides"/>
    </a>
    <a href="https://infosectcbr.com.au/" target="_blank" rel="noopener noreferrer" title="Infosect - Event Sponsor">
      <img src="https://disorientation.cssa.club/files/infosect.png" alt="Infosect"/>
    </a>
  </div>
  <div class="sponsors2_div press-start-2p">
    <span>CSSA Sponsors</span>
    <div class="sponsors2_top flex">
      <a href="https://janestreet.com"  target="_blank"  rel="noopener noreferrer" title="Jane Street - Partner">
        <img src="https://disorientation.cssa.club/files/jane-street-web.png" alt="Jane Street - Partner">
      </a>
      <a href="https://imc.com"  target="_blank"  rel="noopener noreferrer" title="IMC - Major Sponsor">
        <img src="https://disorientation.cssa.club/files/imc-web.png" alt="IMC - Major Sponsor">
      </a>
    </div>

    <div class="sponsors2_bottom flex">
      <a href="https://optiver.com"  target="_blank"  rel="noopener noreferrer" title="Optiver - Digital Sponsor">
        <img src="https://disorientation.cssa.club/files/optiver-web.png" alt="Optiver - Digital Sponsor">
      </a>
      <a href="https://citadel.com"  target="_blank"  rel="noopener noreferrer" title="Citadel - Digital Sponsor">
        <img src="https://disorientation.cssa.club/files/citadel-web.png" alt="Citadel - Digital Sponsor">
      </a>
      <a href="https://atlassian.com"  target="_blank"  rel="noopener noreferrer" title="Atlassian - Digital Sponsor">
        <img src="https://disorientation.cssa.club/files/atlassian-web.png" alt="Atlassian - Digital Sponsor">
      </a>
    </div>
  </div>
</div>
