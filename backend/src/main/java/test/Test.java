/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;


import facade.FacadeHotel;
import javax.persistence.Persistence;

/**
 *
 * @author Tiba
 */
public class Test {
    public static void main(String[] args) {
        
        FacadeHotel fh = new FacadeHotel(Persistence.createEntityManagerFactory("pu"));
        
      System.out.println(fh.getHotelsSearch("Canada","Toronto"));

        
    }
}
