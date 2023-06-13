const Content = () => {
    const fortechStyle = {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
      };
      
  
    const forimageStyle = {
      marginRight: '20px',
    };
  
    const imgStyle = {
      width: '200px',
      maxWidth: '200px',
      height: '200px',
      borderRadius: '8px',
    };
  
    const articleStyle = {
      backgroundColor: '#0B0B45',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      flexGrow: '1',
      height:'100px',
      width:'100px'
    };
  
    return (
      <div>
        <div className="fortech" style={fortechStyle}>
          <div className="forimage" style={forimageStyle}>
            <img src="/Images/arooma.jpg" alt="Description" style={imgStyle} />
          </div>
          <div className="Article" style={articleStyle}>
            <h1>For Employees</h1>
            <p>Unlock Efficiency and Maximize Productivity</p>
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              dignissim lorem at leo euismod, sed hendrerit ex 
           
             
            </p>
          </div>
        </div>
        <div className="fortech" style={fortechStyle}>
          <div className="forimage" style={forimageStyle}>
            <img src="/Images/aroom2.jpg" alt="Description" style={imgStyle} />
          </div>
          <div className="Article" style={articleStyle}>
            <h1>For Studendts</h1>
            <p>Unlock Efficiency and Maximize Productivity</p>
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur 
              dignissim lorem at leo euismod, sed . Fusce
              malesuada aliquam venenatis. Donec sed nisl 
             
            </p>
          </div>
        </div>
        <div className="fortech" style={fortechStyle}>
          <div className="forimage" style={forimageStyle}>
            <img src="/Images/aroomc.jpg" alt="Description" style={imgStyle} />
          </div>
          <div className="Article" style={articleStyle}>
            <h1>For Lecturer</h1>
            <p>Unlock Efficiency and Maximize Productivity</p>
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              dignissim lorem at leo euismod, sed hendrerit ex cursus. Fusce
              
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Content;
  