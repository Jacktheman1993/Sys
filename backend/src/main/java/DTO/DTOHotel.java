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
    private Integer hotelid;

    public DTOHotel(Hotel hotel) {
        this.name = hotel.getName();
        this.description = hotel.getDescription();
        this.addresse = hotel.getAddresse();
        this.currency = hotel.getCurrency();
        this.hotelid = hotel.getId();
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

    @Override
    public String toString() {
        return "DTOhotel{" + "name=" + name + ", description=" + description + ", addresse=" + addresse + ", currency=" + currency + '}';
    }

}
