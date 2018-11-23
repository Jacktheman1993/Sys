/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity.hotel;

import java.io.Serializable;
import java.util.Collection;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author Tiba
 */
@Entity
@Table(name = "room")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Room.findAll", query = "SELECT r FROM Room r")
    , @NamedQuery(name = "Room.findById", query = "SELECT r FROM Room r WHERE r.roomPK.id = :id")
    , @NamedQuery(name = "Room.findByName", query = "SELECT r FROM Room r WHERE r.name = :name")
    , @NamedQuery(name = "Room.findByBed", query = "SELECT r FROM Room r WHERE r.bed = :bed")
    , @NamedQuery(name = "Room.findByDescription", query = "SELECT r FROM Room r WHERE r.description = :description")
    , @NamedQuery(name = "Room.findByPrice", query = "SELECT r FROM Room r WHERE r.price = :price")
    , @NamedQuery(name = "Room.findByHotelName", query = "SELECT r FROM Room r WHERE r.roomPK.hotelName = :hotelName")})
public class Room implements Serializable {

    private static final long serialVersionUID = 1L;
    @EmbeddedId
    protected RoomPK roomPK;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 20)
    @Column(name = "name")
    private String name;
    @Basic(optional = false)
    @NotNull
    @Column(name = "bed")
    private int bed;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 45)
    @Column(name = "description")
    private String description;
    @Basic(optional = false)
    @NotNull
    @Column(name = "price")
    private int price;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "roomId")
    private Collection<Reserved> reservedCollection;
    @JoinColumn(name = "hotel_name", referencedColumnName = "name", insertable = false, updatable = false)
    @ManyToOne(optional = false)
    private Hotel hotel;

    public Room() {
    }

    public Room(RoomPK roomPK) {
        this.roomPK = roomPK;
    }

    public Room(RoomPK roomPK, String name, int bed, String description, int price) {
        this.roomPK = roomPK;
        this.name = name;
        this.bed = bed;
        this.description = description;
        this.price = price;
    }

    public Room(int id, String hotelName) {
        this.roomPK = new RoomPK(id, hotelName);
    }

    public RoomPK getRoomPK() {
        return roomPK;
    }

    public void setRoomPK(RoomPK roomPK) {
        this.roomPK = roomPK;
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

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @XmlTransient
    public Collection<Reserved> getReservedCollection() {
        return reservedCollection;
    }

    public void setReservedCollection(Collection<Reserved> reservedCollection) {
        this.reservedCollection = reservedCollection;
    }

    public Hotel getHotel() {
        return hotel;
    }

    public void setHotel(Hotel hotel) {
        this.hotel = hotel;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (roomPK != null ? roomPK.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Room)) {
            return false;
        }
        Room other = (Room) object;
        if ((this.roomPK == null && other.roomPK != null) || (this.roomPK != null && !this.roomPK.equals(other.roomPK))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entity.hotel.Room[ roomPK=" + roomPK + " ]";
    }
    
}
