# Schema


```graphql
{
    Category: {
        name,
        description,
        activeState
    },
    Connection: {
        theory,
        start,
        end,
        justification,
        (file)
    },
    Events: {
        name,
        description,
        date,
        sequence,
        syncedEvents,
        isApex,
        isActive,
        isPassive
    },
    Organization: {
        name,
        website,
        about
    },
    File: {
        name,
        url
    },
    Reference: {
        url,
        File
    },
    Justification: {
        name,
        Reference
    },
    Theories:{
        name,
        description,
        Topic
        Category,
        [Events],
        [Connection],
        relatedTheories: [Theory],
        sequenceBy:('date'|'order')
    },
    User: {
        name,
        email,
        biography,
        [Organization],
        referredBy:User,
        isSME,
        Location: {
            city,
            state,
            region,
            country,
            lattitude,
            longitude
        },
        photo: File,
        lastLogin
    }

}
```


## Tree Structure

- Theory
    - General Metadata
    - Nodes / Events
        - General Metadata
        - Audio Recording
        - Secondary Referneces
            - URl's
            - Documents (PDF's, etc...)
            - Youbtube Video links 
    - Connections (node -> node)
    - Cache JSON blob of Graph

_Other Notes_
- SME's can only publish, not the public.
- SME's have an approval flow - must be approved by admin.
- Types of accounts
    - Admin
    - Editor
    - User (permission to follow Editors, Topics, Other users, Favorite and Comment.)

* for commenting - considering using Disqus

* For auth - confirm emails via MailChimp
