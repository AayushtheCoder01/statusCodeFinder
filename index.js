let httpStatusCodes = {
    "err100": "This interim response indicates that the client should continue the request or ignore the response if the request is already finished.",
    "err101": "This code is sent in response to an Upgrade request header from the client and indicates the protocol the server is switching to.",
    "err102": "This code indicates that the server has received and is processing the request, but no response is available yet.",
    "err103": "This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.",
    "err200": "The request was successful, and the server has returned the requested data.",
    "err201": "The request has been fulfilled, and a new resource has been created as a result.",
    "err202": "The request has been accepted for processing, but the processing has not been completed yet.",
    "err203": "This response code means the returned metadata is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy.",
    "err204": "The server successfully processed the request, but there is no content to return.",
    "err205": "Tells the user agent to reset the document which sent this request.",
    "err206": "This response code is used when the Range header is sent from the client to request only part of a resource.",
    "err207": "Conveys information about multiple resources, for situations where multiple status codes might be appropriate.",
    "err208": "Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.",
    "err226": "The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.",
    "err300": "This response code is not used in HTTP/1.1. It was used in HTTP/1.0 to indicate multiple options for the resource from which the client may choose.",
    "err301": "The requested resource has been permanently moved to a new URL.",
    "err302": "The requested resource temporarily resides under a different URL.",
    "err303": "The server sent this response to direct the client to get the requested resource at another URI with a GET request.",
    "err304": "The client's cached copy of the requested resource is still valid, and the server has not modified it.",
    "err305": "The requested resource must be accessed through the proxy mentioned in the Location header.",
    "err306": "This response code is no longer used; it was used in an earlier version of the HTTP specification but has been deprecated.",
    "err307": "The requested resource is temporarily available at the URL specified in the Location header.",
    "err308": "The requested resource has been permanently moved to a different URL, and the client should use the new URL for all future requests.",
    "err400": "The server cannot or will not process the request due to client error (e.g., malformed request).",
    "err401": "Authentication is required, and the provided credentials are not valid.",
    "err402": "This code is reserved for future use.",
    "err403": "The server understood the request but refuses to authorize it.",
    "err404": "The requested resource could not be found on the server.",
    "err405": "The method specified in the request is not allowed for the resource.",
    "err406": "The server cannot produce a response matching the list of acceptable values defined in the request's headers.",
    "err407": "Authentication is required for accessing the proxy, and the provided credentials are not valid.",
    "err408": "The client did not produce a request within the server's timeout period.",
    "err409": "The request could not be completed due to a conflict with the current state of the target resource.",
    "err410": "The requested resource is no longer available at the server and no forwarding address is known.",
    "err411": "The server requires the client to provide a valid Content-Length header in the request.",
    "err412": "The precondition given in one or more of the request headers evaluated to true when it was tested on the server.",
    "err413": "The server will not accept the request, as it exceeds the defined request size limits.",
    "err414": "The server will not accept the request, as the URI provided in the request header is too long.",
    "err415": "The server will not accept the request's media format, as it is not supported.",
    "err416": "The client has asked for a portion of the file, but the server cannot supply that portion.",
    "err417": "The server cannot meet the requirements of the Expect request-header field.",
    "err418": "I'm a teapot (RFC 2324).",
    "err421": "The server cannot produce a response matching the list of acceptable values defined in the request's headers.",
    "err422": "The request was well-formed but was unable to be followed due to semantic error.",
    "err423": "The resource that is being accessed is locked.",
    "err424": "The request failed due to failure of a previous request (e.g., a PROPPATCH).",
    "err425": "The server is unwilling to risk processing a request that might be replayed.",
    "err426": "The client should switch to a different protocol, such as TLS/1.0.",
    "err428": "The server requires the request to be conditional.",
    "err429": "The user has sent too many requests in a given amount of time (rate limiting).",
    "err431": "The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.",
    "err451": "The server is denying access to the resource as a response to a legal demand.",
    "err500": "The server encountered an internal error and cannot fulfill the request.",
    "err501": "The server does not support the functionality required to fulfill the request.",
    "err502": "The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.",
    "err503": "The server is currently unable to handle the request due to temporary overloading or maintenance of the server.",
    "err504": "The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server or application it.",
    "err505": "The server does not support the HTTP protocol version used in the request.",
    "err506": "The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.",
    "err507": "The server is unable to store the representation needed to complete the request.",
    "err508": "The server detected an infinite loop while processing the request.",
    "err510": "Further extensions to the request are required for the server to fulfill it.",
    "err511": "Indicates that the client needs to authenticate to gain network access.",
};

window.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        get_info();
    }
})

        function get_info(){
            f = false;
            let input = document.querySelector(".input").value;
            if (input === "100" || input === "status100") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err100;
                return f = true;
            }
            if (input === "101" || input === "status101") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err101;
                return f = true;
            }
            if (input === "102" || input === "status102") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err102;
                return f = true;
            }
            if (input === "103" || input === "status103") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err103;
                return f = true;
            }
            // 200-300
            if (input === "200" || input === "status200") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err200;
                return f = true;
            }
            if (input === "201" || input === "status201") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err201;
                return f = true;
            }
            if (input === "202" || input === "status202") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err202;
                return f = true;
            }
            if (input === "203" || input === "status203") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err203;
                return f = true;
            }
            if (input === "204" || input === "status204") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err204;
                return f = true;
            }
            if (input === "205" || input === "status205") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err205;
                return f = true;
            }
            if (input === "206" || input === "status206") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err206;
                return f = true;
            }
            if (input === "207" || input === "status207") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err207;
                return f = true;
            }
            if (input === "208" || input === "status208") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err208;
                return f = true;
            }
            if (input === "226" || input === "status226") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err226;
                return f = true;
            }
            // 300-400
            if (input === "300" || input === "status300") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err300;
                return f = true;
            }
            if (input === "301" || input === "status301") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err301;
                return f = true;
            }
            if (input === "302" || input === "status302") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err302;
                return f = true;
            }
            if (input === "303" || input === "status303") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err303;
                return f = true;
            }
            if (input === "304" || input === "status304") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err304;
                return f = true;
            }
            if (input === "305" || input === "status305") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err305;
                return f = true;
            }
            if (input === "306" || input === "status306") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err306;
                return f = true;
            }
            if (input === "307" || input === "status307") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err307;
                return f = true;
            }
            // 400-500
            if (input === "400" || input === "status400") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err400;
                return f = true;
            }
            if (input === "401" || input === "status401") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err401;
                return f = true;
            }
            if (input === "402" || input === "status402") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err402;
                return f = true;
            }
            if (input === "403" || input === "status403") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err403;
                return f = true;
            }
            if (input === "404" || input === "status404") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err404;
                return f = true;
            }
            if (input === "405" || input === "status405") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err405;
                return f = true;
            }
            if (input === "406" || input === "status406") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err406;
                return f = true;
            }
            if (input === "407" || input === "status407") {
                var output = document.querySelector("p");
                output.innerText = httpStatusCodes.err407;
                return f = true;
            }
                //
                if (input === "408" || input === "status408") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err408
                    return f = true;
                }
                if (input === "409" || input === "status409") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err409
                    return f = true;
                }
                if (input === "410" || input === "status410") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err410
                    return f = true;
                }
                if (input === "411" || input === "status411") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err411
                    return f = true;
                }
                if (input === "412" || input === "status412") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err412
                    return f = true;
                }
                if (input === "413" || input === "status413") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err413
                    return f = true;
                }
                //
                if (input === "414" || input === "status414") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err414
                    return f = true;
                }
                if (input === "415" || input === "status415") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err415
                    return f = true;
                }
                if (input === "416" || input === "status416") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err416
                    return f = true;
                }
                if (input === "417" || input === "status417") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err417
                    return f = true;
                }
                if (input === "418" || input === "status418") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err418
                    return f = true;
                }
                if (input === "421" || input === "status421") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err421
                    return f = true;
                }
                if (input === "422" || input === "status422") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err422
                    return f = true;
                }
                if (input === "423" || input === "status423") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err423
                    return f = true;
                }
                if (input === "424" || input === "status424") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err424
                    return f = true;
                }
                if (input === "425" || input === "status425") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err425
                    return f = true;
                }
                if (input === "426" || input === "status426") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err426
                    return f = true;
                }
                if (input === "428" || input === "status428") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err428
                    return f = true;
                }
                //
                if (input === "429" || input === "status429") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err429
                    return f = true;
                }
                if (input === "431" || input === "status431") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err431
                    return f = true;
                }
                if (input === "451" || input === "status451") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err451
                    return f = true;
                }
                // 500-600
                if (input === "500" || input === "status500") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err500
                    return f = true;
                }
                if (input === "501" || input === "status501") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err501
                    return f = true;
                }
                if (input === "502" || input === "status502") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err502
                    return f = true;
                }
                if (input === "503" || input === "status503") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err503
                    return f = true;
                }
                if (input === "504" || input === "status504") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err504
                    return f = true;
                }
                if (input === "505" || input === "status505") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err505
                    return f = true;
                }
                if (input === "506" || input === "status506") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err506
                    return f = true;
                }
                if (input === "507" || input === "status507") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err507
                    return f = true;
                }
                if (input === "508" || input === "status508") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err508
                    return f = true;
                }
                if (input === "510" || input === "status510") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err510
                    return f = true;
                }
                if (input === "511" || input === "status511") {
                    var output = document.querySelector("p");
                    output.innerText= httpStatusCodes.err511
                    return f = true;
                } 
                check_for_inavlid()
         }

         function check_for_inavlid() {
            var output = document.querySelector("p");
            output.innerText="Invalid Code"
            if (f===false){
                var element = document.querySelector(".box-animation");
                element.classList.add("box-shake");
                set_time()
                function set_time() {
                    setTimeout(remove_class_from_box, 200);
                }
                function remove_class_from_box() {
                var element = document.querySelector(".box-animation");
                element.classList.remove("box-shake");
                }
            } else{
                console.log("process finished")
            }
         }
