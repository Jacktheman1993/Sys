/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DTO;

import entity.hotel.Hotel;
import entity.hotel.Room;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collection;

/**
 *
 * @author Tiba
 */
public class DTOHotel {

    private String name;
    private String description;
    private String addresse;
    private String currency;
    private Collection<DTORoom> room;

    public DTOHotel(Hotel hotel) {
        this.name = hotel.getName();
        this.description = hotel.getDescription();
        this.addresse = hotel.getAddresse();
        this.currency = hotel.getCurrency();
        this.room = map(hotel.getRoomCollection());

    }

    private Collection<DTORoom> map(Collection<Room> roomCollection) {
        Collection<DTORoom> dtos = new ArrayList<>();
        for (Room room : roomCollection) {
            dtos.add(new DTORoom(room));
        }
        return dtos;
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

    public Collection<DTORoom> getRoomCollection() {
        return room;
    }

    @Override
    public String toString() {
        return "DTOhotel{" + "name=" + name + ", description=" + description + ", addresse=" + addresse + ", currency=" + currency + ", rooms=" + room + '}';
    }

}
