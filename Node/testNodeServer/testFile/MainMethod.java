public class MainMethod {
    //if you want to test your methods in Java, you need to have a main method
    //public (open to everyone) static (this method available to every instance) void (there is nothing to be returned) main(name of the method)
    //main method is only for testing and debugging Java Objects
    public static void main(String[] args){
        //this is how to instantiate an object from outside its file or scope
        //[Object Name (which is it's data type here)] [variable] = new (creating a new instance of this object) [Object You are Pulling in]();
        //instance means new variable assignment and a whole new version of the same object
        JavaTutorial gee = new JavaTutorial();
        gee.setName("Geesung");
        gee.setUsername("Geesung123");
        gee.setPassword("password1234");

        System.out.println(gee.getName());

        JavaTutorial ruru = new JavaTutorial();
        ruru.setName("Rune");
        ruru.setUsername("Rune Zephyroth");
        ruru.setPassword("password1234");

        System.out.println(ruru.getName());

        CharacterCreation fighter = new CharacterCreation();
        fighter.setName("Rune");
        fighter.setCharacterClass("Fighter");
        fighter.setRace("Human");
        fighter.setStats();

        System.out.println(fighter.getName());
    }
}
