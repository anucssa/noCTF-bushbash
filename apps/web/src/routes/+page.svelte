<script>
  // import configState from "$lib/state/config.svelte";
</script>

<div class="h-80 flex justify-center items-end home_div">
  <div class="text-8xl font-mono font-extrabold" id="frontpage-logo-div">
    <img id="frontpage-logo" src="https://u.cubeupload.com/oreophone/logo.png" alt="Welcome to BushBashCTF"/>
  </div>

  <div class="text-2xl font-mono" id="frontpage-subtitle-div">
    <div id="frontpage-subtitle-left">
      <p id="frontpage-subtitle">
        The second student-led CTF of the ANU!
      </p>
      <div id="frontpage-startend-div">
        <div class="frontpage-startend" id="frontpage-start">
          <h3>Start</h3>
          <p>31 Jul 5pm</p>
        </div>
        <div class="frontpage-startend" id="frontpage-start">
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

  <div id="frontpage-info-div">
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

  <div id="frontpage-buttons">
    <button class="frontpage-button" id="frontpage-button-teamup">Team Up</button>
    <button class="frontpage-button" id="frontpage-button-challenges">Challenges</button>
    <button class="frontpage-button" id="frontpage-button-rulesinfo">Rules+Info</button>
  </div>

  <div id="frontpage-events-sign-div">
    <img src="https://u.cubeupload.com/oreophone/eventsign.png" alt="Events">
  </div>

  <div id="frontpage-events-div">
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
        <img src="" alt="@"> <!-- TODO add compressed CSSA logo here -->
        <p>Tech Fest</p>
        <img src="" alt=">"> <!-- TODO add redirect symbol here -->
      </button>
    </div>
  </div>

  <div id="frontpage-sponsors-div">
    <div class="frontpage-startend" id="frontpage-sponsors-title">
      <p>Sponsors</p>
    </div>
    <div class="frontpage-sponsors-row">
      Sponsors - row 1
    </div>
    <div class="frontpage-sponsors-row">
      Sponsors - row 2
    </div>
    <div class="frontpage-sponsors-row">
      Sponsors - row 3
    </div>
  </div>

</div>
