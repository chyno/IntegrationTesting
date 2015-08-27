using IntegrationTesting.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace IntegrationTesting.Controllers
{
    public class ApplicationController :  ApiController
    {
        public Application[] Get()
        {
            return new List<Application> { new Application { Id = 1, ApplicationName = "RS" }, new Application { Id = 2, ApplicationName = "BW" } }.ToArray();

        }
    }
}