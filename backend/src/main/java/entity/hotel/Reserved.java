/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity.hotel;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author Tiba
 */
@Entity
@Table(name = "reserved")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Reserved.findAll", query = "SELECT r FROM Reserved r")
    , @NamedQuery(name = "Reserved.findById", query = "SELECT r FROM Reserved r WHERE r.id = :id")
    , @NamedQuery(name = "Reserved.findByCheckIn", query = "SELECT r FROM Reserved r WHERE r.checkIn = :checkIn")
    , @NamedQuery(name = "Reserved.findByCheckOut", query = "SELECT r FROM Reserved r WHERE r.checkOut = :checkOut")
    , @NamedQuery(name = "Reserved.findByCustomer", query = "SELECT r FROM Reserved r WHERE r.customer = :customer")})
public class Reserved implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Basic(optional = false)
    @NotNull
    @Column(name = "check_in")
    @Temporal(TemporalType.DATE)
    private Date checkIn;
    @Basic(optional = false)
    @NotNull
    @Column(name = "check_out")
    @Temporal(TemporalType.DATE)
    private Date checkOut;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 45)
    @Column(name = "customer")
    private String customer;
    @JoinColumn(name = "room_id", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private Room roomId;

    public Reserved() {
    }

    public Reserved(Integer id) {
        this.id = id;
    }


      public Reserved(Room roomId, Date checkIn, Date checkOut, String customer) {
        this.roomId = roomId;
        this.checkIn = checkIn;
        this.checkOut = checkOut;
        this.customer = customer;
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

    public Room getRoomId() {
        return roomId;
    }

    public void setRoomId(Room roomId) {
        this.roomId = roomId;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Reserved)) {
            return false;
        }
        Reserved other = (Reserved) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Reserved{" + "id=" + id + ", checkIn=" + checkIn + ", checkOut=" + checkOut + ", customer=" + customer + ", roomId=" + roomId + '}';
    }

    
}
