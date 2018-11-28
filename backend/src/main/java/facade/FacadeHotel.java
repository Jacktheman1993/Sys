/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import DTO.DTOhotel;
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

    public List<DTOhotel> getHotels() {

        EntityManager em = emf.createEntityManager();
        List<DTOhotel> list = null;
        try {
em.getTransaction().begin();
           
            TypedQuery<DTOhotel> query  = em.createQuery("SELECT new DTO.DTOhotel(h.name, h.description, h.addresse, h.currency) FROM Hotel h", DTOhotel.class);
            list = query.getResultList();
            return list;
        } finally {
            em.close();
        }

    }

}
