/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity.hotel;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 *
 * @author Tiba
 */
@Embeddable
public class RoomPK implements Serializable {

    @Basic(optional = false)
    @NotNull
    @Column(name = "id")
    private int id;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 45)
    @Column(name = "hotel_name")
    private String hotelName;

    public RoomPK() {
    }

    public RoomPK(int id, String hotelName) {
        this.id = id;
        this.hotelName = hotelName;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (int) id;
        hash += (hotelName != null ? hotelName.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof RoomPK)) {
            return false;
        }
        RoomPK other = (RoomPK) object;
        if (this.id != other.id) {
            return false;
        }
        if ((this.hotelName == null && other.hotelName != null) || (this.hotelName != null && !this.hotelName.equals(other.hotelName))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entity.hotel.RoomPK[ id=" + id + ", hotelName=" + hotelName + " ]";
    }
    
}
