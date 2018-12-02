/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DTO;

import entity.hotel.Hotel;
import entity.hotel.Reserved;
import entity.hotel.Room;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collection;

/**
 *
 * @author Tiba
 */
public class DTORoom {

    private Integer id;
    private String name;
    private int bed;
    private String description;
    private BigDecimal price;
    private Collection<DTOReserved> Reserveds;
 

    public DTORoom() {
    }

   public DTORoom(Room room) {
        this.id = room.getId();
        this.name = room.getName();
        this.bed = room.getBed();
        this.description = room.getDescription();
        this.price = room.getPrice();      
        this.Reserveds = map(room.getReservedCollection());
    }

    private Collection<DTOReserved> map(Collection<Reserved> reservedCollection) {
        Collection<DTOReserved> dtos = new ArrayList<>();
        if(reservedCollection.isEmpty()){
        for (Reserved reserved : reservedCollection) {
            dtos.add(new DTOReserved(reserved));
        }}
        
        return dtos;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getBed() {
        return bed;
    }

    public void setBed(int bed) {
        this.bed = bed;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Collection<DTOReserved> getReserveds() {
        return Reserveds;
    }

    public void setReserveds(Collection<DTOReserved> Reserveds) {
        this.Reserveds = Reserveds;
    }


    @Override
    public String toString() {
        return "DTORoom{" + "id=" + id + ", name=" + name + ", bed=" + bed + ", description=" + description + ", price=" + price + ", Reserveds=" + Reserveds + '}';
    }

}
