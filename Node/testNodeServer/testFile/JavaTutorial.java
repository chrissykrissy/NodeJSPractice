/* JAVA FUNDAMENTALS */
//Every programming language will have 3 (sometimes optional) attributes
//        - Object - a collection of variables and methods
//        - Variable - a descriptor or a holder of data
//        - Methods - an action that will manipulate attributes to an object or variable
//Everything declared in Object Oriented Languages (hereafter referred to as OOL) are objects
//Objects contains a collection of descriptors such as variables and methods.
//Only things that are not objects are primitive data types
//Anything non primitive are objects
//Ex:  String is an object
//     int is not an object
//Pro Tip:  anything that starts with a capitalized name is an object

//[access modifiers] [data type] [name of Object]
//[access modifiers] - private, public, protected
//                     private - variables can only be viewed and manipulated by this scope
//                     public - variables can be viewed or manipulated by anything outside of this scope
//                     protected - anything within the package can have access to this object's methods and variables
//[data type] - class, interface, objects
public class JavaTutorial {
    //Variable Declaration
    //[access modifier] [whether it's final or not] [data type] [variable name] = [value];
    //[final or not] - final means the value can no longer be manipulated.  This is the value and it can not be changed
    private final String owner = "Rune";
    private String name;
    private String username;
    private String password;
    private int id;

    //Method Declaration
    //[access modifier] [return datatype] [method name]([argument if needed])
    //[return type] - all object oriented languages require you to have a return type before the method call
    //below is an example of a setter method.  Only way to manipulate a variable that is private.  Make sure
    //the method is public otherwise you've wasted your time
    public void setName(String name){
        this.name = name;
    }

    //below is an example of a getter method which needs to be public so outside methods and classes can have access to it
    public String getName(){
        return name;
    }

    public String getOwner(){
        return owner;
    }

    public void setUsername(String username){
        this.username = username;
    }

    public String getUsername(){
        return username;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String getPassword(){
        return password;
    }
}
