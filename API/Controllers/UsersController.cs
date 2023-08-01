using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController] //the hien rang class nay la 1 class controller
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers(){
            return  await _context.Users.ToListAsync();
        }
        
        [HttpGet("{id}")] //de lay ra du lieu user ca nhan dua theo ID
        public async Task<ActionResult<AppUser>> GetUsers(int id){
            return  await _context.Users.FindAsync(id);
        }
    }
}