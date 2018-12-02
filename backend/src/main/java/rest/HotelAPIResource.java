/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import DTO.DTORoom;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.hotel.CountryAndCity;
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

    @GET
    @Path("search/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getRooms(@PathParam("id") Integer id) {
        List<DTORoom> dtos = fc.getRooms(id);
        return Response.ok(gson.toJson(dtos)).build();
    }

    /**
     * Returns all hotels matching the query params in the database, complete
     * with rooms attached.
     *
     * @param country The name of the country to look for
     * @param city The name of the city to look for
     * @param dateF The date from which the user wants to look for
     * @param dateT The date to which the user wants to look for
     * @return a json string with the hotel info
     */
    @GET
    @Path("search")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response getHotelsSearch(String json) {

        CountryAndCity countryandcity = gson.fromJson(json, CountryAndCity.class);

        return Response.ok(gson.toJson(fc.getHotelsSearch(countryandcity.getCountry(), countryandcity.getCity()))).build();

    }

    /**
     * THIS IS ONLY MEANT FOR IF WE CHANGE THE STRUCTURE OF THE API TO SEND A
     * SMALLER AMOUNT OF INFO TO THE FRONTEND TO SHOW IN THE RESULT LIST AND
     * THEN MAKE AN ADDITIONAL CALL WHEN LOOKING AT DETAILS ABOUT THE HOTEL
     * SELECTED
     *
     * Returns a specific hotel in the database, complete with rooms attached.
     *
     * @return a json string with the hotel info
     */
//    @GET
//    @Path("specific/{id}")
//    @Produces(MediaType.APPLICATION_JSON)
//    public Response getHotelByID(@PathParam("id") int id) {
//        //return Response.ok(gson.toJson(fc.getSpecificHotel())).build();
//        throw new UnsupportedOperationException("Not yet implemented");
//    }
}
