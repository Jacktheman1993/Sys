/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facade;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author Tiba
 */
public class FacadeHotel {

    EntityManagerFactory emf;

    public FacadeHotel(EntityManagerFactory emf) {
        this.emf = emf;
    }

    
    
    
    private List<String> getHotels() {

        EntityManager em = emf.createEntityManager();

        try {

            return null;
        } finally {
            em.close();
        }

    }

}
