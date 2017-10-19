package com.HShift.Repository;

import com.HShift.Model.Team;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface TeamRepository extends PagingAndSortingRepository<Team, Long> {

        List<Team> findByName(@Param("name") String teamName);
}
