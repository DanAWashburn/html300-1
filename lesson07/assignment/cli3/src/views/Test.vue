<template>
<div class="home">
  <h1>Test Page</h1>

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
<!--Do v-for loop through these things-->
    <div role="tablist">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
            <b-card-text>{{ copy }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-2 variant="info">Accordion 2</b-button>
        </b-card-header>
        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ cards }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-3 variant="info">Accordion 3</b-button>
        </b-card-header>
        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>{{ text }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>



  </div>

</div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      cards: [{
        copy: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod.` ,
        id: 0
      },
      {
        copy: `Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident.` ,
        id: 1
      },
      {
        copy: ` Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.` ,
        id: 2
      }
    ]
    };
  }
};
</script>
