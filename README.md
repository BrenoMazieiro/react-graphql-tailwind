# BoilerPlate: Docker, React, TailWindcss, Apollo Client

## Devops instructions

You gonna need docker and docker-compose on your machine!

#### Docker: https://docs.docker.com/install/

Every distro has its own way to install docker:

- Fedora: https://docs.docker.com/install/linux/docker-ce/fedora/
- Ubuntu: https://docs.docker.com/install/linux/docker-ce/ubuntu/
- Mac: https://docs.docker.com/docker-for-mac/install/

Just find yours googling: docker install < DISTRO NAME >

#### docker-compose: https://docs.docker.com/compose/install/

## FrontEnd instructions

**Pattern**: Atomic Design

More about it: https://bradfrost.com/blog/post/atomic-web-design/

Apollo Client will take care of this things for us, this is why we are not using redux or axios.
And we are using hooks.

Any Doubts go to:
- Apollo Client: https://www.apollographql.com/docs/react/
- Hooks: https://reactjs.org/docs/hooks-intro.html
- React: https://reactjs.org/
- Atomic Design: https://github.com/diegohaz/arc
- TailWindCss: https://tailwindcss.com/docs

&nbsp;  
&nbsp;  

## Install Instructions - Lets do IT!

###  **STEP 1 - Soul preparation**

Grab a beer, wine or juice, because it is just an automated task. =)

###  **STEP 2 - Devops (this may take a bit to complete!)**

####  Build nodejs image (depending on your hardware this may take a while, be **patient!**):

With docker and docker-compose installed jut go to the **ROOT** project folder:

`docker build -t nodejs-react docker-images/nodejs-react`

#### **STEP 3 - Changing your hosts (MAC AND LINUX)   ==> (MANDATORY) <==**
You need to go to your **/etc/hosts** file and ADD the lines below:  
```
127.0.0.1   proxy.local.thegodstack.com 
127.0.0.1   spa.local.thegodstack.com
```

Now it will be possible to use a real full address, and not the old (and lame) **'localhost:port'**

P.S.: There is an hosts file on windows as well, but I do not know where, try google! =)

###  **STEP 4 - Starting everything!**

Starting everything:

`docker-compose up`

### **STEP 6 - Access Url**

* SPA: spa.local.thegodstack.com

### **STEP 7 - Running Test**

* FrontEnd: `docker exec -it spa.local.plathanus.com.br yarn test`
