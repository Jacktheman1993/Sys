/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;


import entity.hotel.Reserved;
import entity.hotel.Room;
import facade.FacadeHotel;
import java.util.Date;
import javax.persistence.Persistence;

/**
 *
 * @author Tiba
 */
public class Test {
    public static void main(String[] args) {
        
        FacadeHotel fh = new FacadeHotel(Persistence.createEntityManagerFactory("pu"));
        
      //System.out.println(fh.getHotelsSearch("Canada","Toronto"));
        System.out.println(fh.getRooms(1).size());
        System.out.println(new Date());
         System.out.println(new Date(2012, 3, 8));
         
         Reserved reserved = new Reserved(new Room(1), new Date(), new Date(), "de");
         
         boolean a = fh.book(reserved);
          System.out.println(a);
        
    }
}
