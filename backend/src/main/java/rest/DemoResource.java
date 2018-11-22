package rest;


//import facade.SwapiFacade;
import java.io.IOException;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.SecurityContext;


/**
 * REST Web Service
 *
 * @author lam@cphbusiness.dk
 */
@Path("info")
public class DemoResource {

    @Context
    private UriInfo context;
   // private Gson gson;
   
    
    @Context
    SecurityContext securityContext;
  // removed becuase dont need for this project
  //  SwapiFacade fac = new SwapiFacade(Persistence.createEntityManagerFactory("pu"));

    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("user")
    @RolesAllowed("user")
    public String getFromUser(){
        String user = securityContext.getUserPrincipal().getName();
        return "\"Hello from USER: "+ user+"\"";
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("admin")
    @RolesAllowed("admin")
    public String getFromAdmin() {
        String user = securityContext.getUserPrincipal().getName();
        return "\"Hello from ADMIN"+ user+"\"";
    }
    

    
}


