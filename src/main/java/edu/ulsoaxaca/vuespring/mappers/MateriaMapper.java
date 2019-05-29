package edu.ulsoaxaca.vuespring.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import edu.ulsoaxaca.vuespring.model.Examen;
import edu.ulsoaxaca.vuespring.model.Materia;

@Mapper
public interface MateriaMapper {

	@Select("Select * from materia")
	public List<Materia> findAll(); 
	
	@Select("Select * from examen where id_materia=#{id}")
	public List<Examen> findAllbyId(@Param("id") String id);
	
	@Insert("Insert into materia(nombre) values(#{nombre})")
	public void insert(@Param("nombre") String nombre);
	
	@Insert("Insert into examen(id_materia, preguntas) values(#{id_materia}, #{preguntas})")
	public void insertExamen(@Param("id_materia") String id_materia,@Param("preguntas") String preguntas);
}
