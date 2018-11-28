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
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
@Table(name = "country_and_city")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "CountryAndCity.findAll", query = "SELECT c FROM CountryAndCity c")
    , @NamedQuery(name = "CountryAndCity.findById", query = "SELECT c FROM CountryAndCity c WHERE c.id = :id")
    , @NamedQuery(name = "CountryAndCity.findByCountry", query = "SELECT c FROM CountryAndCity c WHERE c.country = :country")
    , @NamedQuery(name = "CountryAndCity.findByCity", query = "SELECT c FROM CountryAndCity c WHERE c.city = :city")})
public class CountryAndCity implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 50)
    @Column(name = "country")
    private String country;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 45)
    @Column(name = "city")
    private String city;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "countryAndCityId")
    private Collection<Hotel> hotelCollection;

    public CountryAndCity() {
    }

    public CountryAndCity(Integer id) {
        this.id = id;
    }

    public CountryAndCity(Integer id, String country, String city) {
        this.id = id;
        this.country = country;
        this.city = city;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    @XmlTransient
    public Collection<Hotel> getHotelCollection() {
        return hotelCollection;
    }

    public void setHotelCollection(Collection<Hotel> hotelCollection) {
        this.hotelCollection = hotelCollection;
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
        if (!(object instanceof CountryAndCity)) {
            return false;
        }
        CountryAndCity other = (CountryAndCity) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entity.hotel.CountryAndCity[ id=" + id + " ]";
    }
    
}
