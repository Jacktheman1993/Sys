/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package DTO;

import entity.hotel.Reserved;
import java.util.Date;

/**
 *
 * @author Tiba
 */
public class DTOReserved {

    private Integer id;
    private Date checkIn;
    private Date checkOut;
    private String customer;

    public DTOReserved() {
    }

    DTOReserved(Reserved reserved) {
        this.id = reserved.getId();
        this.checkIn = reserved.getCheckIn();
        this.checkOut = reserved.getCheckOut();
        this.customer = reserved.getCustomer();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getCheckIn() {
        return checkIn;
    }

    public void setCheckIn(Date checkIn) {
        this.checkIn = checkIn;
    }

    public Date getCheckOut() {
        return checkOut;
    }

    public void setCheckOut(Date checkOut) {
        this.checkOut = checkOut;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer;
    }

    @Override
    public String toString() {
        return "DTOReserved{" + "id=" + id + ", checkIn=" + checkIn + ", checkOut=" + checkOut + ", customer=" + customer + '}';
    }
    
    
    
}
