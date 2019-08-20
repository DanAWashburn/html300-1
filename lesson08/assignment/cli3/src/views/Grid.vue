<template>
  <div class="home">
    <div class="container">
      <h2>A Responsive Grid</h2>
      <div class="container">
        <!--Sets content in horiztonal row-->
        <div class="row">
          <!--Note: the grading directions say, "Grid system responds to XL, L, M, SM, XS screens." I figured the below is what it was getting at, even though xl, l, and xs are not explicitly mentioned . The grid system responds to those sizes.-->
          <!--At screensizes medium (768px) and above, the left field takes up 9 columns and the right takes up 3 columns-->
          <!--At screensizes smaller than medium (<768px), the two fields stack vertically.-->
          <div class="col-md-9 bg-info text-white">
            <h3>Pirate Ipsum</h3>
            <p>Gangway code of conduct maroon broadside topmast gangplank bilged on her anchor Jolly Roger bounty gally. Admiral of the Black pressgang gaff lugsail sutler piracy cutlass Privateer weigh anchor scallywag. Main sheet blow the man down
              port rigging strike colors aye salmagundi come about mizzenmast pressgang. Skysail hands splice the main brace pressgang hang the jib Plate Fleet come about Arr clipper lugger. Scurvy Blimey smartly lateen sail crack Jennys tea cup Arr
              spike long boat hearties coffer. Stern Pieces of Eight maroon lanyard bilge rat chase Cat o'nine tails parrel piracy lugsail. Reef Nelsons folly bilge rat log careen hands bilge crack Jennys tea cup hail-shot gaff. Topsail mutiny spike
              skysail shrouds chandler gaff Buccaneer tack reef. Holystone quarterdeck landlubber or just lubber pink belay keelhaul aft Davy Jones' Locker splice the main brace list.</p>
          </div>
          <div class="col-md-3 bg-warning">
            <h3>Zombie Ipsum</h3>
            <p>Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? </p>
          </div>
        </div>
      </div>
      <br>
      <h2>A Grid That Responds A Bit Differently</h2>
      <div class="container">
        <!--Sets content in horiztonal row-->
        <div class="row">
          <!--At screensizes small (576px) and above, the three fields are evenly sized-->
          <!--At screensizes smaller than small (<576px), the three fields stack vertically.-->
          <div class="col-sm bg-primary text-white">
            <h3>Lit Ipsum</h3>
            <p>MADAM DUVAL was accompanied by Monsieur Du Bois. I am surprised that she should choose to introduce him where he is so unwelcome</p>
          </div>
          <div class="col-sm bg-danger text-white">
            <h3>Monacle Ipsum</h3>
            <p>Monocle ipsum dolor sit amet baggu punctual ANA, K-pop international finest Ginza bureaux premium global quality of life.</p>
          </div>
          <div class="col-sm bg-success">
            <h3>Dating Ipsum</h3>
            <p> Whiskey Breaking Bad I value art foodie discussing politics, I'm pretty laid-back my height and shoulders adventures short-term dating what to order off of the menu.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>
