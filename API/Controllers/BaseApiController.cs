using API.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{   [ServiceFilter(typeof(LogUserActivity))]
    [ApiController] //the hien rang class nay la 1 class controller
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        
    }
}