<template>
  <div class="home">
    <div>
      <div class="container">
        <div class="bg-warning text-dark">
          <h3 class="mb-1">
            <!--Creates button to expland information, starts with information collapsed and targets first field of data-->
            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne">
              Things to Know About Breakfast
            </button>
          </h3>
        </div>
        <!--Collapsed information with id so that data-target="#collapseOne" can find it-->
        <div id="collapseOne" class="collapse">
          <div>
            Bacon ipsum dolor amet tongue ribeye strip steak, bacon chuck landjaeger short ribs ham hock shankle alcatra short loin pork loin chicken beef. Turducken doner salami pancetta buffalo pork chop porchetta sausage. Porchetta burgdoggen
            meatloaf corned beef pastrami leberkas tongue boudin cupim biltong. Jerky strip steak tri-tip turducken kielbasa pork porchetta ham hock corned beef venison kevin ham alcatra.
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="bg-danger text-white">
        <h3 class="mb-1">
          <!--Creates button to expland information, starts with information collapsed and targets second field of data-->
          <button class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo">
            Things to Know About Lunch
          </button>
        </h3>
      </div>
      <!--Collapsed information with id so that data-target="#collapseTwo" can find it-->
      <div id="collapseTwo" class="collapse">
        <div class="mb-1">
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean
          collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
        </div>
      </div>
    </div>
    <div class="container">
      <div class="bg-success text-white">

        <h3 class="mb-1">
          <!--Creates button to expland information, starts with information collapsed and targets third field of data-->
          <button class="btn btn-link" data-toggle="collapse" data-target="#collapseThree">
            Things to Know About Dessert
          </button>
        </h3>
      </div>
      <!--Collapsed information with id so that data-target="#collapseThree" can find it-->
      <div id="collapseThree" class="collapse">
        <div>
          Cupcake ipsum dolor sit amet jelly gummies fruitcake. Cotton candy cotton candy soufflé gummi bears caramels gummies caramels. Tiramisu caramels jujubes. Tart sugar plum sugar plum liquorice wafer. Brownie gummi bears cotton candy wafer
          macaroon gummies gingerbread marzipan croissant. Sweet roll marzipan tiramisu. Jelly jujubes tootsie roll marshmallow oat cake candy halvah sweet roll. Gummi bears chupa chups jelly bonbon caramels.
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>
