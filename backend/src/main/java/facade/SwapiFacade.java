/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author Nicolai
 */
public class SwapiFacade {

EntityManagerFactory emf;    

    public SwapiFacade(EntityManagerFactory emf) {
        this.emf = emf;
    }

 
    public String getSwappiData() throws IOException{
        
        List<String> list = new ArrayList<>();
        for (int i = 1; i <= 5; i++) {
            list.add(getSwappiData2(i));
            
        }
       

        
        return  "{\"results\": [ "+String.join(",", list)+"]}";
    }
    
    
    
public String getSwappiData2(int id) throws MalformedURLException, IOException{
    URL url = new URL("https://swapi.co/api/people/"+id);
    HttpURLConnection con = (HttpURLConnection) url.openConnection();
    con.setRequestMethod("GET");
    con.setRequestProperty("Accept", "application/json;charset=UTF-8");
    con.setRequestProperty("User-Agent", "server");
    Scanner scan = new Scanner(con.getInputStream());
    String jsonStr = null;
    if (scan.hasNext()) {
      jsonStr = scan.nextLine();
    }
    scan.close();
    return jsonStr;
  }

    
    
    
    
    
}
