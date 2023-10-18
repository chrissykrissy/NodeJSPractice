import java.lang.Math;
import java.util.HashMap;

public class CharacterCreation {
    private String name;
    private String race;
    private String characterClass;
    HashMap<String, Integer> stats = new HashMap<String, Integer>();

    public void setName(String name){
        this.name = name;
    }

    public String getName(){
        return name;
    }

    public void setRace(String race){
        if(race.toLowerCase() != "human" || race.toLowerCase() != "elf" || race.toLowerCase() != "orc"){
            System.out.println(race + " is not a viable option.  Please choose another");
            this.race = "invalid";
            return;
        }
        this.race = race;
    }

    public String getRace(){
        return race;
    }

    public void setClass(String characterClass){
        if(characterClass != "Fighter" || characterClass != "Rogue"){
            System.out.println(characterClass + " ");
        }
        this.characterClass = characterClass;
    }

    public void setStats(){
        this.stats.put("Strength", (int)(Math.random()*8)+10);
        this.stats.put("Dexterity", (int)(Math.random()*8)+10);
        this.stats.put("Constitution", (int)(Math.random()*8)+10);

        String chosenRace = this.getRace();
        if(chosenRace.toLowerCase() == "elf"){
            int currentDex = this.stats.get("Dexterity") + 2;
            this.stats.put("Dexterity", currentDex);
        }
        if(chosenRace.toLowerCase() == "orc"){
            int currentCon = this.stats.get("Constitution") + 2;
            this.stats.put("Constitution", currentCon+2);
        }
        if(chosenRace.toLowerCase() == "human"){
            int currentStr = this.stats.get("Strength") + 2;
            this.stats.put("Strength", currentStr+2);
        }

        String chosenClass = this.getCharacterClass();
        if(chosenClass.toLowerCase() == "fighter"){
            int currentStr = this.stats.get("Strength") + 2;
            this.stats.put("Strength", currentStr);
        }
        if(chosenClass.toLowerCase() == "rogue"){
            int currentDex = this.stats.get("Dexterity") + 2;
            this.stats.put("Dexterity", currentDex+2);
        }
    }

    public String getCharacterClass() {
        return characterClass;
    }

    public void setCharacterClass(String characterClass) {
        this.characterClass = characterClass;
    }

    public HashMap<String, Integer> getStats() {
        return stats;
    }

}
