/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DTO;

import entity.hotel.Room;
import java.util.Collection;

/**
 *
 * @author Tiba
 */
public class DTOhotel {

    private String name;
    private String description;
    private String addresse;
    private String currency;
    private Collection<Room> roomCollection;

    public DTOhotel(String name, String description, String addresse,
            String currency) {
        this.name = name;
        this.description = description;
        this.addresse = addresse;
        this.currency = currency;

    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getAddresse() {
        return addresse;
    }

    public String getCurrency() {
        return currency;
    }

    public Collection<Room> getRoomCollection() {
        return roomCollection;
    }

    @Override
    public String toString() {
        return "DTOhotel{" + "name=" + name + ", description=" + description + ", addresse=" + addresse + ", currency=" + currency + ", roomCollection=" + roomCollection + '}';
    }
    
    

}
