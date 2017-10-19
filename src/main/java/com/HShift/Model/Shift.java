package com.HShift.Model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Shift {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    public User getUser(){
        return user;
    }

    public void setUser(User user){
        this.user = user;
    }

}
