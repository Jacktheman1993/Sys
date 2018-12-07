/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import DTO.DTORoom;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import entity.hotel.CountryAndCity;
import entity.hotel.Reserved;
import facade.FacadeHotel;
import java.util.Date;
import javax.persistence.Persistence;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;
import javax.ws.rs.POST;
import java.util.Date;


/**
 * REST Web Service
 *
 * @author Tiba
 */
@Path("hotel")
public class HotelAPIResource {

    @Context
    private UriInfo context;
    private Gson gson;
    private facade.FacadeHotel fc = new FacadeHotel(Persistence.createEntityManagerFactory("pu"));

    public HotelAPIResource() {
        gson = new GsonBuilder().setPrettyPrinting().create();
    }

    /**
     * Returns all hotels in the database, complete with rooms attached.
     *
     * @return a json string with the hotel info
     */
    @GET
    @Path("all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllHotels() {
        String json = gson.toJson(fc.getHotels());
        return Response.ok(json).build();
    }

    /**
     * Returns all hotels matching the query params in the database, complete
     * with rooms attached.
     *
     * @param country The name of the country to look for
     * @param city The name of the city to look for
     * @return a json string with the hotel info
     */
    @GET
    @Path("search")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getHotelsSearch(@QueryParam("country") String country, @QueryParam("city") String city) {
        return Response.ok(gson.toJson(fc.getHotelsSearch(country, city))).build();
    }

    @GET
    @Path("search/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getRooms(@PathParam("id") Integer id) {
        List<DTORoom> dtos = fc.getRooms(id);
        return Response.ok(gson.toJson(dtos)).build();
    }

    @POST
    @Path("book")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response doBooking(String jsonIn){
        
    JsonObject json = new JsonParser().parse(jsonIn).getAsJsonObject();
    
    Reserved reserved = new Reserved(fc.getRoom(json.get("roomID").getAsInt()),
            new Date(json.get("dateF").getAsLong()),
            new Date(json.get("dateT").getAsLong()),
            json.get("name").getAsString());
    return Response.ok(gson.toJson(fc.book(reserved))).build();
    }
}
