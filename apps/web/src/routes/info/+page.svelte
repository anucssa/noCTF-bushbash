<script>
  import configState from "$lib/state/config.svelte";
</script>

<div class="h-80 flex justify-center items-end home_div" id="info_div_container">
  <div id="info_div">
  <h2 class="text-4xl"><strong>
    The ANU's First O-Week Capture the Flag
Competition!
</strong>
  </h2>
  <br>
  <ul class="text-xl">
    <li>Beginner-friendly Computer Security challenges</li>
    <li>Teams of up to <strong>6</strong> players</li>
    <li><strong>$300</strong> total prize value for top 3 teams</li>
  </ul>
<br>
  <div id="start_end_holder" class="flex press-start-2p">
    <div id="start_holder">
      <span id="start_title" class="time_title">Start</span><br>
      <span id="start_duration" class="time_duration">18 Feb 2pm</span>
    </div>
    <div id="end_holder">
      <span id="end_title" class="time_title">End</span><br>
      <span id="end_duration" class="time_duration">22 Feb 2pm</span>
    </div>
  </div>
<br>
  <hr>
<br>
  <h2 class="text-4xl"><strong>
    Rules
  </strong></h2><br>
  <ul>
    <li>
      Each player must register an individual account <a title="Login Screen" class="link" href="/auth">here</a>.
      Players may then join/form teams <a title="Teams Screen" class="link" href="/team">here</a>.
    </li>
    <li>The flag format is <code>disorientation{"{yourflaghere}"}</code>.</li>
    <li>
      Do not attack anything other than the provided infrastructure. In particular, please refrain
      from abusing any services hosted by ANU.
    </li>
    <li>Do not share flags or solutions publicly or with other teams.</li>
    <li>If you find a correct flag, please don't hold it until the last minute - this
      ensures the scoreboard always reflects the true progress of each team.
    </li>
    <li>
      Decisions made by the CSSA are final.
    </li>
    <li>
      Enjoy the challenges, learn plenty and have fun!
    </li>
  </ul>
  <br>
  <h2 class="text-4xl"><strong>
    Prizes
  </strong></h2><br>
  The following prizes are offered to the top teams in the <strong>ANU Division</strong>:<br><br>
  <strong>1st, 2nd, 3rd:</strong> <a href="https://www.bsidesau.com.au" class="link">B-Sides Tickets</a> for all members!<br>
+ Exclusive <a href="https://tantosec.com" class="link">TantoSec</a> goods, Rubiks Cubes, and CSSA hoodies!
  <br>
  <br>
    <hr>
  <br>
  <h2 class="text-4xl"><strong>
    Contacts
  </strong></h2><br>
  Have questions about a particular challenge or the competition as a whole? Feel free to contact
  the CSSA through the following channels:
  <br><br>
  <ul>
    <li>
      Our <a href="https://cssa.club/discord" target="_blank"  rel="noopener noreferrer" class="link">Discord Server</a>
    </li>
    <li>
      Our Email <code>anucssacommittee@gmail.com</code> - Please prepend the subject with <code>[CTF]</code> so it can be seen by us.
    </li>
  </ul>
  <br>
  Note that any clarifications/challenge updates will be announced publicly on this website.
  Announcements may be viewed on the <a class="link" title="Challenge Screen" href="/challenges">Challenges</a> screen.
  </div>
</div>
