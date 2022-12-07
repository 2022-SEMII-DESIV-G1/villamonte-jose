package com.labspark;
import static spark.Spark.*;

import com.labspark.Pyramid;
import com.labspark.Pyramids;

import org.json.JSONObject;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        Pyramids pyramids = new Pyramids();

        options("/*", (request, response) -> {
            String accessControlRequestHeaders = request
                    .headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers",
                        accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request
                    .headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods",
                        accessControlRequestMethod);
            }

            return "OK";
        });

        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

            post("/PostPyramid", (req, res) -> {
           
            res.type("application/json");
             
           
            Pyramid pyramid = new Pyramid();
            JSONObject body = new JSONObject (req.body());

            String piramideInicialTemp;
            String piramideFinalTemp;

            pyramid.setId(pyramids.getPyramids().size() + 1);
            piramideInicialTemp = body.getString("piramideInicial");
            piramideFinalTemp = body.getString("piramideFinal");

            pyramids.setPyramids(pyramid);

            JSONObject POSTjson = new JSONObject(pyramids); 
             return POSTjson;
            });

            get("/GetAllPyramid", (req,res)->{
                res.type("application/json");
                JSONObject GETjson = new JSONObject(pyramids); 
                return GETjson;
            });

            get("/GetPyramidById/:id", (req,res)->{
                res.type("application/json");
                String params = req.params(":id");
                Integer id = Integer.parseInt(params);

                JSONObject GETjson = new JSONObject(pyramids.iterable(id)); 
                return GETjson;
            });
        }
    }
}
