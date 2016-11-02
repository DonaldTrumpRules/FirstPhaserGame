/*global Phaser*/


var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
var game_state = {}


game_state.main = function() {};
game_state.main.prototype = {


    preload: function() {
        game.load.image('sky', 'assets/sky.png');
        game.load.image('ground', 'assets/platform.png');
        game.load.image('star', 'assets/star.png');
        game.load.spritesheet('dude', 'assets/dude.png', 32, 48);

    },


    create: function() {
        game.add.sprite(2, 4, 'star');
        
        game.add.sprite(0, 0, 'sky');
        
        //The platforms group contains the ground and the 2 ledges we can jumb on
        this.plateform = game.add.group.group();
        
        //We will enable physics for any object that is created in this group
        this.platforms.enableBody = true;
        
        // Here we create the ground. 
        var ground = this.platforms.create(0, game.world.height - 64, 'ground');
        
        // Scale it to fit the width of the game (the original spirte is 400x32 in size)
        ground.scale.setTo(2,2)
        
        // This stops it stops it from falling away when you jump on it
        ground.body.immovable = true;
        
        // Now let's create two ledges 
        var ledge = this.platforms.create(X-POSITION, Y-POSITION, 'ground'); 
        ledge.body.immovable = true;
        
        // We're going to be using physciscs, so enable the Arcading 
        game.physics.startSystem(Phaser.Physics.ARCADE)
        
        // The this.player and its settings
        this.player = game.add.spirte(32, game.world.height - 150,'dude';
        
        // We need to enable physics on the this.player
        game.physics.arcade.enable(this.player);
        
        // Player physics properties. Give the liitle guy a slight bounce.
          this.player.body.bounce.y = BOUNCE-Value;
          this.player.body.gravity.y = GRAVITY-Value;
          this.player.body.collideWorldBounds = true;
          
        // Our two animations, walking left and right.
        this .player.animations.add('left', [0, 1, 2, 3], 10, true);
        this.player.animations.add('right',[5, 6, 7, 8], 10, true);
        // Collide the player and the platforms
        game.physics. arcade.collide(this.player, this. platforms);
        // Our controls.
        this.cursors = game.input .keyboard.createCursorKeys();
        // Reset the this.players velocity (movement)
        this.player.body.velocity.x = 0;
        
        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -150;
            
            this.player.animations.play('left');
        }    
        else if (this.cursors.right .isDown) {
            
        }    
            
        }

        

    },


    update: function() {


    },


}
game.state.add('main', game_state.main);
game.state.start('main');
