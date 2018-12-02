/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import DTO.DTOHotel;
import DTO.DTORoom;
import entity.hotel.Room;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

/**
 *
 * @author Tiba
 */
public class FacadeHotel {

    EntityManagerFactory emf;

    public FacadeHotel(EntityManagerFactory emf) {
        this.emf = emf;
    }

    public List<DTOHotel> getHotels() {

        EntityManager em = emf.createEntityManager();
        List<DTOHotel> list = null;
        try {
            

            TypedQuery<DTOHotel> query = em.createQuery("SELECT new DTO.DTOHotel(h) FROM Hotel h", DTOHotel.class);
            list = query.getResultList();
            return list;
        } finally {
            em.close();
        }

    }

    public List<DTOHotel> getHotelsSearch(String country , String city) {
     
        EntityManager em = emf.createEntityManager();
        List<DTOHotel> list = null;
        try {
            

            TypedQuery<DTOHotel> query = em.createQuery("SELECT new DTO.DTOHotel(h) FROM Hotel h WHERE h.countryAndCityId.city =:city AND h.countryAndCityId.country =:country", DTOHotel.class);
             query.setParameter("city", city);
               query.setParameter("country", country);
            list = query.getResultList();
            return list;
        } finally {
            em.close();
        }

    }
    
    public List<DTORoom> getRooms(Integer hotelID){
        
        EntityManager em = emf.createEntityManager();
        List<DTORoom> list= null;
        try{
            TypedQuery<DTORoom> query = em.createQuery("SELECT new DTO.DTORoom(r) From Room r WHERE r.hotelId.id =:hotelID",DTORoom.class);
            query.setParameter("hotelID", hotelID);
            list = query.getResultList();
            return list;
        }finally{
            em.close();
        }
    }
    
    
}
