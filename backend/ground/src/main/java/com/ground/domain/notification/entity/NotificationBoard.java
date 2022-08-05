package com.ground.domain.notification.entity;

import com.ground.domain.board.entity.Board;
import com.ground.domain.user.entity.User;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
@Table(name = "t_notification_board")
public class NotificationBoard {
	
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@JoinColumn(name = "from_user_id")
	@ManyToOne(fetch = FetchType.LAZY)
	private User from;
	
	@JoinColumn(name = "to_user_id")
	@ManyToOne(fetch = FetchType.LAZY)
	private User to;
	
	@Column(name = "type")
	private int type;
	
	@JoinColumn(name = "board_id")
	@ManyToOne(fetch = FetchType.LAZY)
	private Board boardId;

	@Column(name = "del_YN", columnDefinition="tinyint(1) default 0")
    private boolean delYN;

    @Column(name = "check_YN" ,columnDefinition="tinyint(1) default 0")
    private boolean checkYN;
    
    @CreatedDate
    @Column(name = "reg_dttm")
    private LocalDateTime regDttm;
    

}

